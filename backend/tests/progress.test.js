const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Progress = require('../models/progress');

const app = express();
app.use(express.json());

const router = express.Router();

// Mock routes for testing
router.post("/update", async (req, res) => {
  try {
    const { userId, role, level } = req.body;
    if (!userId || !role || level === undefined) {
      return res.status(400).json({ success: false, error: "userId, role, and level are required" });
    }
    let record = await Progress.findOne({ userId, role });
    if (!record) {
      record = new Progress({ userId, role, level });
    } else {
      record.level = level;
    }
    await record.save();
    res.json({ success: true, progress: record });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/api/progress", router);

describe('Progress Routes', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/testdb');
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await Progress.deleteMany({});
    });

    describe('POST /api/progress/update', () => {
        it('should update progress successfully', async () => {
            const res = await request(app)
                .post('/api/progress/update')
                .send({
                    userId: 'user123',
                    role: 'developer',
                    level: 5
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body.success).toBe(true);
            expect(res.body.progress.level).toBe(5);
        });

        it('should return error for missing fields', async () => {
            const res = await request(app)
                .post('/api/progress/update')
                .send({
                    userId: 'user123',
                    role: 'developer'
                    // missing level
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body.success).toBe(false);
            expect(res.body.error).toBe('userId, role, and level are required');
        });

        it('should update existing progress', async () => {
            await Progress.create({
                userId: 'user123',
                role: 'developer',
                level: 3
            });

            const res = await request(app)
                .post('/api/progress/update')
                .send({
                    userId: 'user123',
                    role: 'developer',
                    level: 7
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body.success).toBe(true);
            expect(res.body.progress.level).toBe(7);
        });
    });

    describe('GET /api/progress/:userId', () => {
        beforeEach(async () => {
            await Progress.create([
                { userId: 'user123', role: 'developer', level: 5 },
                { userId: 'user123', role: 'designer', level: 3 },
                { userId: 'user456', role: 'developer', level: 2 }
            ]);
        });

        it('should get progress for user', async () => {
            const res = await request(app)
                .get('/api/progress/user123');

            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toBe(2);
            expect(res.body[0].role).toBe('developer');
            expect(res.body[1].role).toBe('designer');
        });

        it('should return empty array for user with no progress', async () => {
            const res = await request(app)
                .get('/api/progress/user789');

            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toBe(0);
        });
    });
});
