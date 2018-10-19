const express = require("express");
const db = require("./access.js");
const router = express.Router();

router.route("/projects").post((req, res) => {
  const project = req.body;
  db.addProject(project)
    .then(newProject => res.status(201).json(newProject))
    .catch(err =>
      res
        .status(500)
        .json({ error: "Project could not be added at this time." })
    );
});

router.route("/actions").post((req, res) => {
  const action = req.body;
  db.addAction(action)
    .then(newAction => res.status(201).json(newAction))
    .catch(err =>
      res.status(500).json({ error: "Action could not be added at this time." })
    );
});

module.exports = router;
