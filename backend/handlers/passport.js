const passport = require("passport");
const mongoose = require("mongoose");
const { User } = require("../db");

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
