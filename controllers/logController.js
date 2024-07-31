const User = require("./../models/userModel");

const getLogs = async (req, res) => {
  try {
    const user_id = req.params._id;
    const { limit, from, to } = req.query;

    const user = await User.findById(user_id);

    if (!user) {
      return res.json({
        message: "No user found",
      });
    }

    let userLog = user.log;

    if (from) {
      const fromDate = new Date(from);
      fromDate.setHours(0, 0, 0, 0); // Normalize the from date to midnight

      userLog = userLog.filter((obj) => {
        const logDate = new Date(obj.date);
        logDate.setHours(0, 0, 0, 0); // Normalize each log date to midnight

        return logDate.getTime() >= fromDate.getTime();
      });
    }

    if (to) {
      const toDate = new Date(to);
      toDate.setHours(23, 59, 59, 999); // Normalize the to date to the end of the day

      userLog = userLog.filter((obj) => {
        const logDate = new Date(obj.date);
        return logDate.getTime() <= toDate.getTime();
      });
    }

    if (limit) {
      userLog = userLog.slice(0, limit);
    }

    const responseObj = {
      _id: user._id,
      username: user.username,
      count: userLog.length,
      log: userLog,
    };

    return res.json(responseObj);
  } catch (error) {
    return res.json({
      error: "Internal server error",
    });
  }
};

module.exports = { getLogs };
