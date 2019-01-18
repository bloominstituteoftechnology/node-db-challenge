const express = require("express");
const route = express.Router();

const db = require("./actionsModal");

route.get("/", async (req, res) => {
  try {
    const actions = await db.get();
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: "Could not retrieve actions data." });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const action = await db.get(id);

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
    await db.insert(action);
    res.status(201).json({ message: "A new action has been created" });
  } catch (err) {
    res.status(500).json({ error: "Could not create a new action." });
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const action = await db.get(id);

    !action
      ? res.status(404).json({ error: "A action with that ID does not exist." })
      : await db.update(id, changes);

    res.status(202).json(action);
  } catch (err) {
    res.status(500).json({ error: "Could not update the action." });
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const action = await db.get(id);
    !action
      ? res
          .status(404)
          .json({ error: "The action with this id does not exist." })
      : await db.remove(id);

    res.status(202).json({ message: "The action has been deleted." });
  } catch (err) {
    res.status(500).json({ error: "Unable to delete the action." });
  }
});

module.exports = route;
