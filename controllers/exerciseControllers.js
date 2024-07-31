const Exercise = require("./../models/exerciseModel");
const User = require("./../models/userModel");

const formatDate = (date) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .replace(/,/g, "");

  return formattedDate;
};

const createExercise = async (req, res) => {
  try {
    const description = req.body.description;
    const duration = req.body.duration;
    const userId = req.body[":_id"];

    const user = await User.findById({ _id: userId });

    if (!user) {
      return res.json({
        message: "No user found",
      });
    }

    const date = req.body.date ? new Date(req.body.date) : new Date();

    const formattedDate = formatDate(date);

    const newExercise = await Exercise.create({
      description,
      date,
      duration: Number(duration),
      user: userId,
    });

    // const response = {
    //   _id: user._id,
    //   username: user.username,
    //   date: formattedDate,
    //   duration: newExercise.duration,
    //   description: newExercise.description,
    // };

    return res.json({
      _id: user._id,
      username: user.username,
      date: formattedDate,
      duration: newExercise.duration,
      description: newExercise.description,
    });
  } catch (error) {
    return res.json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  createExercise,
};
