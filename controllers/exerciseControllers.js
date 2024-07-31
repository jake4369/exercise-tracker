const { Exercise } = require("./../models/exerciseModel");
const User = require("./../models/userModel");

const formatDate = (date) => {
  const formattedDate = date
    ? new Date(date).toDateString()
    : new Date().toDateString();

  return formattedDate;
};

const createExercise = async (req, res) => {
  try {
    const user_id = req.params._id;
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

    const responseObj = {
      _id: user._id,
      username: user.username,
      date: formatDate(newExercise.date),
      duration: newExercise.duration,
      description: newExercise.description,
    };

    return res.json(responseObj);
  } catch (error) {
    return res.json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  createExercise,
};
