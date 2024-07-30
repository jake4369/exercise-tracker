const Exercise = require("./../models/exerciseModel");
const User = require("./../models/userModel");

const createExercise = async (req, res) => {
  try {
    const { description, duration } = req.body;
    const userId = req.body[":_id"];

    const user = await User.findById(userId);

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
      .replace(",", "");

    await Exercise.create({
      description,
      duration: Number(duration),
      formattedDate,
      user: userId,
    });

    const responseObj = {
      ...user._doc,
      formattedDate,
      duration: Number(duration),
      description,
    };

    res.json(responseObj);
  } catch (error) {
    res.json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  createExercise,
};
