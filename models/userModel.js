const mongoose = require("mongoose");
const { exerciseSchema } = require("./exerciseModel");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    log: {
      type: [exerciseSchema],
      default: [],
    },
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
