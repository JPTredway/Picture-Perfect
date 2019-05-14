const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const { Image } = require("./models/Image");
const { User } = require("./models/User");

module.exports = {
  Image,
  User
};
