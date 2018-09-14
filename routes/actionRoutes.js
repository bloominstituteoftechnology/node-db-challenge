const express = require("express");
const knex = require("knex");
const dbConfig = require("../knexfile");
const db = knex(dbConfig.development);
const router = express.Router();

// GET
router.get("/", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: "The actions could not be retrieved." });
    });
});

// GET by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ action_id: id })
    .then(action => {
      if (action.length === 0) {
        res.status(404).json({
          message: "The action with the specified ID does not exist.",
        });
      } else {
        return res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The action could not be retrieved." });
    });
});
// end GET

// POST
router.post("/", (req, res) => {
  const action = req.body;
  if (!action) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the action.",
    });
  } else {
    db("actions")
      .insert(action)
      .into("actions")
      .then(actions => {
        res.status(201).json({ message: "Action successfully added." });
      })
      .catch(err => {
        res.status(500).json({ error: "The action could not be added." });
      });
  }
});
// end POST

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where("action_id", id)
    .del()
    .then(actions => {
      if (actions === 0) {
        res.status(404).json({
          message: "The action with the specified ID does not exist.",
        });
      } else {
        res.status(200).json({ message: "Action removed successfully." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The action could not be removed." });
    });
});
// end DELETE

// PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedAction = req.body;
  if (!updatedAction) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the action.",
    });
  } else {
    db("actions")
      .where("action_id", id)
      .update({
        action_description: updatedAction.action_description,
        action_notes: updatedAction.action_notes,
        action_completed: updatedAction.action_completed,
      })
      .then(actions => {
        res.status(200).json({ message: "Action successfully modified." });
      })
      .catch(err => {
        res.status(500).json({ error: "The action could not be updated." });
      });
  }
});
// end PUT

module.exports = router;