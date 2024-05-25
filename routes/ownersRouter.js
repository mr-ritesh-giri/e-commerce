const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .sendStatus(503)
        .send("You don't have permission to create a new owner.");
    }

    let { username, email, password } = req.body;

    let ownerCreated = await ownerModel.create({
      username,
      email,
      password,
    });

    res.sendStatus(201).send("We can create a owner.", ownerCreated);
  });
}

router.get("/", (req, res) => {
  res.send("Hey! owners this side.");
});

module.exports = router;
