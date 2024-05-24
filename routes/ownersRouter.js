const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.get("/", (req, res) => {
  res.send("Hey! owners this side.");
});



// if (process.env === "development") {
//   console.log("Hey!");
// }
router.post("/create", (req, res) => {
  res.send("Hey! owners this side.");
});

module.exports = router;
