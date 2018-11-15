const express = require("express");
const actionDb = require("../../data/helpers/actionDb.js");
const router = express.Router();

router.get("/", (req, res) => {
  actionDb
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => res.send({ error: "The actions could not be retrieved." }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionDb
    .get(id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({
          message: "The action with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ error: "The action couldn't be retrieved" });
    });
});

router.post("/", async (req, res) => {
  if (!req.body.description || !req.body.notes) {
    return res
      .status(400)
      .json({ message: "Add a description and a note with some details." });
  }
  try {
    let data = await actionDb.insert(req.body);
    return res.status(201).json({
      id: data.id,
      project_id: req.body.project_id,
      description: req.body.description,
      notes: req.body.notes,
      completed: false
    });
  } catch (err) {
    res.status(500).json({
      error: "There was an error while saving the action to the database"
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  actionDb.get(id).then(action => {
    if (!action) {
      res
        .status(404)
        .json({ message: "The action with the specified ID does not exist." });
    } else {
      actionDb
        .remove(id)
        .then(action => {
          res.status(200).json({ message: "action was successfully deleted" });
        })
        .catch(err => {
          console.log("Error: ", err);
          res.status(500).json({
            error:
              "The internet is a permanent and scary place. Request denied."
          });
        });
    }
  });
});

//updates the user and returns the updated user object
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { description, notes, completed, project_id } = req.body;
  const action = { description, notes, completed, project_id };

  if (!req.body.description || !req.body.notes) {
    return res
      .status(400)
      .json({ message: "You at least need a description and a note." });
  } else {
    actionDb.get(id).then(action => {
      if (!action) {
        return res.status(404).json({
          message: "The action with the specified ID does not exist."
        });
      }
    });
  }

  actionDb
    .update(id, action)
    .then(res.status(200))
    .catch(err => {
      res.status(500).json({ error: "Didn't work, don't know why." });
    });

  actionDb.get(id).then(action => {
    if (action) {
      res.status(200).json(action);
    }
  });
});

module.exports = router;
