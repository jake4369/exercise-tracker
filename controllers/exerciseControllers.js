const Exercise = require("./../models/exerciseModel");

const createExercise = async (req, res) => {
  try {
    const { description, duration } = req.body;
    const userId = req.body[":_id"];

    if (!userId) {
      res.json({
        message: "No user found",
      });
    }

    const date = req.body.date === "" ? new Date() : new Date(req.body.date);

    const newExercise = await Exercise.create({
      user: userId,
      description,
      duration,
      date,
    });

    res.json({
      _id: userId,
      description,
      duration,
      date,
    });
  } catch (error) {
    res.json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  createExercise,
};
