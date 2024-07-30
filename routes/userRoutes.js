const express = require("express");
const { createUser } = require("./../controllers/userControllers");

const router = express.Router();

router.route("/").post(createUser);

module.exports = router;
