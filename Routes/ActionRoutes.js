const express = require("express");
const actions = require("../data/db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const list = await actions("actions");
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const addedAction = req.body;
  try {
    const ids = await actions.insert(addedAction).into("actions");
    res.status(201).json(ids[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const action = await actions
      .select()
      .from("actions")
      .where(req.params)
      .first();
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ error: `No action with the id exists.` });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await actions
      .where(req.params)
      .from("actions")
      .del();
    if (count !== 0) {
      res.status(200).json(count);
    } else {
      res.status(400).json({ error: "The action to be deleted couldn't be found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const name = req.body;
  try {
    const count = await actions
      .where(req.params)
      .from("actions")
      .update(name);
    console.log("count is: ", count);
    if (count !== 0) {
      try {
        const updatedAction = await actions
          .select()
          .from("actions")
          .where(req.params);
        res.status(200).json(updatedAction);
      } catch (err) {
        res.status(404).json({ message: "The specific action does not exist." });
      }
    } else {
      res.status(400).json({ err: "That specific action couldn't be found." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
