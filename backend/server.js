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
  origin: ["https://techquest.pages.dev","http://localhost:3000" ],
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



// ✅ Step 7: Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
