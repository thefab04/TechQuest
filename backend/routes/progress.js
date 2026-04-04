const express = require("express");
const Progress = require("../models/progress"); // make sure this path is correct
const router = express.Router();

// Save or update progress
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

// Get progress for user
router.get("/:userId", async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
