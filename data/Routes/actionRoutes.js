const express = require("express");
const knex = require("knex");
const knexConfig = require("../../knexfile");
const DB = knex(knexConfig.development);
const router = express.Router();

router.get("/", (req, res) => {
  DB("actions")
    .then(actions => {
      res.json(actions);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Actions cannot be retrieved from the DB." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  DB("actions")
    .where("actions.id", id)
    .then(project => {
      const thisProject = project[0];
      DB("actions")
        .select(
          "actions.id",
          "actions.description",
          "actions.notes",
          "actions.is_complete",
          "actions.project_id"
        )
        .where("actions.project_id", id)
        .then(actions => {
          if (!thisProject) {
            res.status(404).json({ err: "invalid project id" });
          } else {
            res.json({
              id: thisProject.id,
              name: thisProject.name,
              description: thisProject.description,
              is_complete: thisProject.is_complete,
              actions: actions
            });
          }
        });
    })
    .catch(() => {
      res
        .status(404)
        .json({ error: "Info about this action could not be retrieved." });
    });
});

router.post("/", (req, res) => {
  const action = req.body;
  if (
    action.description &&
    action.project_id &&
    action.notes &&
    typeof action.is_complete === "boolean"
  ) {
    DB("projects")
      .where({ id: action.project_id })
      .first()
      .then(project => {
        if (!project) {
          res.status(404).json({ err: "invalid project id" });
        } else {
          DB("actions")
            .insert(action)
            .then(id => {
              if (id[0]) {
                DB("actions")
                  .where("actions.id", id[0])
                  .then(action => {
                    res.status(201).json(action);
                  });
              }
            })
            .catch(() => {
              res.status(500).json({ err: "Error creating action" });
            });
        }
      })
      .catch(() => {
        res.status(500).json({ err: "Failed to insert action" });
      });
  } else {
    res.status(404).json({ message: "Provide all fields" });
  }
});

router.put("/:id", (req, res) => {
  const actions = req.body;
  const { id } = req.params;
  if (actions.description && actions.is_complete && actions.notes) {
    DB("actions")
      .where("id", id)
      .update(actions)
      .then(id => {
        res.status(201).json({ id: id[0] });
      })
      .catch(() => {
        res.status(500).json({ error: "Failed to update the action info." });
      });
  } else {
    res.status(400).json({
      error:
        "Please provide a Description, notes and if the action is completed or not."
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  DB("actions")
    .where({ id: id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res.status(404).json({
          message: "404 - action with that id ${id} not found in the DB."
        });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
