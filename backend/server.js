const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const users = require('./models/user.js');
const Feedback = require("./routes/feedbackroutes.js");
const progressRoutes = require("./routes/progress.js");
const path = require("path");

dotenv.config();
const app = express();

// ✅ Step 1: Enable CORS **before** anything else
app.use(cors({
  origin: ["http://localhost:3000", "https://techquest.pages.dev"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Optional - to help debug CORS
app.use((req, res, next) => {
  console.log("Incoming request from:", req.headers.origin);
  next();
});

// ✅ Step 2: Parse JSON body
app.use(express.json());

// ✅ Step 3: Apply rate limiting **AFTER** CORS and JSON middleware
// (So that preflight OPTIONS requests don't get blocked)
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10000,               // allow plenty for local dev
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// ✅ Step 4: Routes
app.use("/api/progress", progressRoutes);
app.use("/api/feedback", Feedback);

// ✅ Step 5: Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ Step 6: Auth routes
app.post("/api/auth/signup", [
  body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
  body('emailOrMobile').isLength({ min: 3 }).withMessage('Email or mobile must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, emailOrMobile, password } = req.body;

    const existingUser = await users.findOne({ emailOrMobile });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new users({ name, emailOrMobile, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Account created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/auth/login", [
  body('emailOrMobile').isLength({ min: 3 }).withMessage('Email or mobile must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { emailOrMobile, password } = req.body;

    const foundUser = await users.findOne({ emailOrMobile }).select('+password');
    if (!foundUser) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: foundUser._id },
      process.env.JWT_SECRET || 'defaultsecret',
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        _id: foundUser._id,
        name: foundUser.name,
        emailOrMobile: foundUser.emailOrMobile,
      },
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "Server error" });
  }
});

// Forgot Password Route
app.post("/api/auth/forgot-password", [
  body('emailOrMobile').isLength({ min: 3 }).withMessage('Email or mobile must be at least 3 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { emailOrMobile } = req.body;

    const user = await users.findOne({ emailOrMobile });
    if (!user) return res.status(400).json({ message: "User not found!" });

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send OTP via email (assuming emailOrMobile is email for simplicity)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailOrMobile,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}. It expires in 10 minutes.`
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "OTP sent to your email!" });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: "Server error" });
  }
});

// Verify OTP Route
app.post("/api/auth/verify-otp", [
  body('emailOrMobile').isLength({ min: 3 }).withMessage('Email or mobile must be at least 3 characters long'),
  body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { emailOrMobile, otp } = req.body;

    const user = await users.findOne({ emailOrMobile });
    if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP!" });
    }

    // Clear OTP after verification
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    // Generate reset token
    const resetToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'defaultsecret',
      { expiresIn: "15m" }
    );

    res.json({ message: "OTP verified!", resetToken });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ message: "Server error" });
  }
});

// Reset Password Route
app.post("/api/auth/reset-password", [
  body('resetToken').notEmpty().withMessage('Reset token is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { resetToken, newPassword } = req.body;

    // Verify reset token
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET || 'defaultsecret');
    const user = await users.findById(decoded.id);
    if (!user) return res.status(400).json({ message: "Invalid reset token!" });

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password reset successfully!" });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ message: "Server error" });
  }
});

app.use(express.static(path.join(__dirname, "../build")));

app.get(/. */, (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// ✅ Step 7: Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
