const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./../models/userModel");
const Exercise = require("./../models/exerciseModel");

dotenv.config({ path: "./../.env" });

const DB = process.env.MONGODB_URI;

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

// DELETE ALL USERS FROM DB
const deleteUserData = async () => {
  try {
    await User.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteExerciseData = async () => {
  try {
    await Exercise.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--delete-users") {
  deleteUserData();
} else if (process.argv[2] === "--delete-exercises") {
  deleteExerciseData();
}
