const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbacks.js');

// 📨 Save new feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, message, type } = req.body;
    if (!name || !message || !type) {
      return res.status(400).json({ message: "Name, message, and type are required!" });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Invalid email format!" });
    }

    const feedback = new Feedback({ name, email, message, type });
    await feedback.save();
    res.json({ success: true, message: "Feedback saved successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 📋 Get all feedback (sorted latest first)
router.get('/', async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbackList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
