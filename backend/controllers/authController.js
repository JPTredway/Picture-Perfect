const passport = require("passport");

const login = passport.authenticate("local");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.end();
};

module.exports = {
  login,
  isAuthenticated
};
