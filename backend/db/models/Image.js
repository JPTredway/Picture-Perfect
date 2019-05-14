const { Schema } = require("mongoose");

const Image = new Schema({
  url: {
    type: String,
    required: true
  }
});

module.exports = { Image };
