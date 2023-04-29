const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const user = module.model("USER", userModel);

module.exports = user;
