const mongoose = require("mongoose");
const config = require("config");

const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/snatch`)
  .then(function () {
    debug("Connected");
  })
  .catch(function (err) {
    debug("Error", err);
  });

module.exports = mongoose.connection;
