const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: () => new Date(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = { exerciseSchema, Exercise };
