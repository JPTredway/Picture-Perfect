const { User } = require("../db");

const registerUser = async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });
    await User.register(user, req.body.password);
    next();
  } catch (err) {
    throw new Error("Something went wrong!", err.message);
  }
};

module.exports = { registerUser };
