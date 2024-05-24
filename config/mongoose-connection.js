const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mr_ritesh_giri:qQC3xcYsKT52qaJm@cluster0.1vljjlk.mongodb.net/snatch"
  )
  .then(function () {
    console.log("Connected");
  })
  .catch(function (err) {
    console.log("Error", err);
  });

module.exports = mongoose.connection;
