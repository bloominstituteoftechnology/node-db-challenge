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
    res.status(500).json({ error: "Could not retrieve the action data." });
  }
});

route.post("/", async (req, res) => {
  const action = req.body;
  try {
    await db("actions").insert(action);
    res.json({ message: "A new action has been created" });
  } catch (err) {
    res.status(500).json({ error: "Could not create a new action." });
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const action = await db("actions")
      .where({ id })
      .first();

    !action
      ? res.status(404).json({ error: "A action with that ID does not exist." })
      : await db("actions").where({ id }.update(changes));

    res.json(action);
  } catch (err) {
    res.status(500).json({ error: "Could not update the action." });
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const action = await db("actions")
      .where({ id })
      .first();
    !action
      ? res
          .status(404)
          .json({ error: "The action with this id does not exist." })
      : await db("actions")
          .where({ id })
          .del();

    res.json({ message: "The action has been deleted." });
  } catch (err) {
    res.status(500).json({ error: "Unable to delete the action." });
  }
});

module.exports = route;
