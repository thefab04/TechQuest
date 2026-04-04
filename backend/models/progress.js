const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  role: { type: String, required: true },
  level: { type: Number, default: 1 },
});

module.exports = mongoose.model("Progress", progressSchema);
