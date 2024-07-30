const Exercise = require("./../models/exerciseModel");
const User = require("./../models/userModel");

const createExercise = async (req, res) => {
  try {
    const { description, duration } = req.body;
    const userId = req.body[":_id"];

    const user = await User.findById({ _id: userId });

    if (!user) {
      return res.json({
        message: "No user found",
      });
    }

    const date = req.body.date === "" ? new Date() : new Date(req.body.date);

    const options = {
      weekday: "short", // 'Tue'
      year: "numeric", // '2024'
      month: "short", // 'Jul'
      day: "numeric", // '30'
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .replace(/,/g, "");

    const newExercise = await Exercise.create({
      description,
      duration: Number(duration),
      date: formattedDate,
    });

    const response = {
      _id: user._id,
      username: user.username,
      date: newExercise.date,
      duration: newExercise.duration,
      description: newExercise.description,
    };

    res.json(response);
  } catch (error) {
    res.json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  createExercise,
};
