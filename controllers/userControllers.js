const User = require("./../models/userModel");

const createUser = async (req, res) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      res.json({
        message: "Username is already taken",
      });
    }

    const newUser = await User.create({
      username,
    });

    res.json({
      username: newUser.username,
      _id: newUser._id,
    });
  } catch (error) {
    res.json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  createUser,
};
