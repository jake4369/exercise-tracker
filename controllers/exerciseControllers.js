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
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .replace(/,/g, "");

    const newExercise = await Exercise.create({
      description,
      date,
      duration: Number(duration),
    });

    const response = {
      _id: user._id,
      username: user.username,
      date: formattedDate,
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
