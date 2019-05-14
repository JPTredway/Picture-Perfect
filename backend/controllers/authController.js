const passport = require("passport");

const login = passport.authenticate("local");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  console.log("User not logged in");
  res.end();

  // throw new Error("You must be logged in to do that!");
};

module.exports = {
  login,
  isAuthenticated
};
