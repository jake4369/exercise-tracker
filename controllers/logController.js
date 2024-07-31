const User = require("./../models/userModel");

const getLogs = async (req, res) => {
  try {
    const user_id = req.params._id;

    const user = await User.findById(user_id);

    if (!user) {
      return res.json({
        message: "No user found",
      });
    }

    const responseObj = {
      _id: user._id,
      username: user.username,
      count: user.log.length,
      log: user.log,
    };

    return res.json(responseObj);
  } catch (error) {
    return res.json({
      error: "Internal server error",
    });
  }
};

module.exports = { getLogs };
