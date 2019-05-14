const passport = require("passport");
const { Strategy } = require("passport-local");
const { User } = require("./db");
const bcrypt = require("bcrypt");

passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, {
            message: `No user found with email "${email}"`
          });
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser(async (_id, cb) => {
  try {
    const user = await User.findById(_id);
    cb(null, user);
  } catch (err) {
    cb(err);
  }
});
