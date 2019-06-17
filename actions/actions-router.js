const express = require("express");

const actionsDb = require("./actions-model.js");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const actions = await actionsDb.find();
    res.status(200).json(actions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the tracks" });
  }
});

router.post("/", async (req, res) => {
  const action = req.body;

  if (action.name) {
    try {
      const insert = await actionsDb.insert(action);
      res.status(201).json(insert);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the action" });
    }
  } else {
    res.status(400).json({ message: "Please provide name of the action" });
  }
});

module.exports = router;