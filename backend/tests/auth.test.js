const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const users = require('../models/user.js');

const app = express();
app.use(express.json());

// Mock routes for testing
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
            return res.status(400).json({ message: "User already exists!!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new users({ name, emailOrMobile, password: hashedPassword });
        await newUser.save();

        res.json({ message: "Account created successfully!!!" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.post('/api/auth/login', [
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

        if (!foundUser) {
            return res.status(400).json({ message: "User not found!!!" });
        }

        const isMatch = await bcrypt.compare(password, foundUser.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

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
        res.status(500).json({ message: "Server error!!" });
    }
});

describe('Auth Routes', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/testdb');
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await users.deleteMany({});
    });

    describe('POST /api/auth/signup', () => {
        it('should create a new user', async () => {
            const res = await request(app)
                .post('/api/auth/signup')
                .send({
                    name: 'Test User',
                    emailOrMobile: 'test@example.com',
                    password: 'password123'
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body.message).toBe('Account created successfully!!!');
        });

        it('should return validation errors for invalid input', async () => {
            const res = await request(app)
                .post('/api/auth/signup')
                .send({
                    name: 'T',
                    emailOrMobile: 'te',
                    password: '123'
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body.errors).toBeDefined();
        });

        it('should not create user if already exists', async () => {
            await users.create({
                name: 'Existing User',
                emailOrMobile: 'test@example.com',
                password: await bcrypt.hash('password123', 10)
            });

            const res = await request(app)
                .post('/api/auth/signup')
                .send({
                    name: 'Test User',
                    emailOrMobile: 'test@example.com',
                    password: 'password123'
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body.message).toBe('User already exists!!');
        });
    });

    describe('POST /api/auth/login', () => {
        beforeEach(async () => {
            await users.create({
                name: 'Test User',
                emailOrMobile: 'test@example.com',
                password: await bcrypt.hash('password123', 10)
            });
        });

        it('should login successfully', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    emailOrMobile: 'test@example.com',
                    password: 'password123'
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body.message).toBe('Login successful');
            expect(res.body.token).toBeDefined();
            expect(res.body.user).toBeDefined();
        });

        it('should return validation errors for invalid input', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    emailOrMobile: 'te',
                    password: '123'
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body.errors).toBeDefined();
        });

        it('should return error for invalid credentials', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    emailOrMobile: 'test@example.com',
                    password: 'wrongpassword'
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body.message).toBe('Invalid credentials');
        });

        it('should return error for non-existent user', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    emailOrMobile: 'nonexistent@example.com',
                    password: 'password123'
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body.message).toBe('User not found!!!');
        });
    });
});
