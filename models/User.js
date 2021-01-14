const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    maxLength: 50,
  },
  lastname: {
    type: String,
    maxLength: 50,
  },
  password: {
    type: String,
    minLength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExpiration: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
