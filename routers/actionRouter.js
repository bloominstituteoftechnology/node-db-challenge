const actionDb = require("../data/helpers/actionDb");
const projectDb = require("../data/helpers/projectDb");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  actionDb
    .getAction()
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
      .getProject(newAction.project_id)
      .then(project => {
        if (project[0]) {
          if (
            !newAction.action_description ||
            typeof newAction.action_description !== "string" ||
            newAction.action_description === ""
          ) {
            res
              .status(400)
              .json({ error: "action description is required and must be a string" });
          } else {
            actionDb
              .insert(newAction)
              .then(id => res.status(200).json(id))
              .catch(err =>
                res.status(500).json({ error: "trouble adding action" })
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
