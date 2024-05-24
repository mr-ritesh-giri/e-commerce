const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey! product this side.");
});

module.exports = router;
