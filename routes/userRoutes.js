const express = require("express");
const { createUser, getUsers } = require("./../controllers/userControllers");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

module.exports = router;
