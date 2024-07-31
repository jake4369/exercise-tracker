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
    const user_id = req.body[":_id"];
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = formatDate(req.body.date);

    const user = await User.findById(user_id);

    if (!user) {
      return res.json({
        message: "No user found",
      });
    }

    const newExercise = await Exercise.create({
      user: user._id,
      description,
      duration,
      date,
    });

    return res.json(newExercise);
  } catch (error) {
    return res.json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  createExercise,
};
