

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    emailOrMobile: { type: String, required: true, unique: true },
    password: { type: String, required: true ,select: false},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
