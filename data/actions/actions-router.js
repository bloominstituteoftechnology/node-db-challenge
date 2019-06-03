const express = require("express");

const actionsDb = require("./actions-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await actionsDb.find();
    res.status(200).json(actions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the tracks" });
  }
});

module.exports = router;
