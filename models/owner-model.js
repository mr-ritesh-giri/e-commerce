const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    required: [true, "can't be blank"],
  },

  email: {
    type: Email,
    required: true,
    required: [true, "can't be blank"],
  },

  picture: String,

  gstin: Number,
});

module.exports = mongoose.model("user", ownerSchema);
