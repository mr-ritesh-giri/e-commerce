const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mr_ritesh_giri:qQC3xcYsKT52qaJm@cluster0.1vljjlk.mongodb.net/snatch"
);

const userSchema = mongoose.Schema({
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

  cart: {
    type: Array,
    default: [],
  },

  isAdmin: Boolean,

  orders: {
    type: Array,
    default: 0,
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);
