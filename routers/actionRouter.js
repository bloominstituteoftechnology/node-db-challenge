const actionDb = require("../data/helpers/actionDb");
const projectDb = require("../data/helpers/projectDb");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  actionDb
    .get()
    .then(actions => {
      actions[0]
        ? res.json(actions)
        : res.status(400).json({ error: "there are currently no actions" });
    })
    .catch(err => {
      res.status(500).json({ error: "could not retrieve actions" });
    });
});

router.post("/", (req, res) => {
  const newAction = req.body;
  if (!newAction.project_id || typeof newAction.project_id !== "number") {
    res
      .status(400)
      .json({ error: "project id must be included and must be a number" });
  } else {
    projectDb
      .get(newAction.project_id)
      .then(project => {
        if (project[0]) {
          if (
            !newAction.action_name ||
            typeof newAction.action_name !== "string" ||
            newAction.action_name === ""
          ) {
            res
              .status(400)
              .json({ error: "project name is required and must be a string" });
          } else if (
            !newProject.project_completed ||
            typeof newProject.project_completed !== "boolean"
          ) {
            res
              .status(400)
              .json({
                error: "completed status is required and must be a boolean"
              });
          } else {
            projectDb
              .insert(newProject)
              .then(id => res.status(200).json(id))
              .catch(err =>
                res.status(500).json({ error: "trouble adding project" })
              );
          }
        } else {
          res
            .status(400)
            .json({ error: "project id must correspond to existing project" });
        }
      })
      .catch(err =>
        res.status(500).json({ error: "trouble checking project id" })
      );
  }
});

module.exports = router;
