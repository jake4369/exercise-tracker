const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

// cors middleware
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static views
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/users", userRouter);

module.exports = app;
