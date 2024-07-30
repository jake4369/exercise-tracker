const express = require("express");
const { createUser, getUsers } = require("./../controllers/userControllers");
const { createExercise } = require("./../controllers/exerciseControllers");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:_id/exercises").post(createExercise);

module.exports = router;
