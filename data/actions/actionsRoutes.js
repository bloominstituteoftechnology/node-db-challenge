const express = require("express");
const route = express.Router();

const db = require("../dbConfig");

route.get("/", async (req, res) => {
  try {
    const actions = await db("actions");
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: "Could not retrieve actions data." });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const action = await db("actions")
    .where({ id })
    .first();

  try {
    !action
      ? res
          .status(404)
          .json({ error: "An action with that ID does not exist." })
      : res.json({ action });
  } catch (err) {
    res.json({ error: "Could not retrieve the action data." });
  }
});

module.exports = route;
