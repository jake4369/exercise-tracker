const express = require("express");
const { createUser, getUsers } = require("./../controllers/userControllers");
const { createExercise } = require("./../controllers/exerciseControllers");
const { getLogs } = require("./../controllers/logController");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:_id/exercises").post(createExercise);

router.route("/:_id/logs").get(getLogs);

module.exports = router;
