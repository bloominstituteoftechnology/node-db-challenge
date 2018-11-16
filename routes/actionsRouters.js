const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);
const router = express.Router();

router
  .route("/projects")
  .get((req, res) => {
    db("projects")
      .then(projects => res.status(201).json(projects))
      .catch(err => res.status(500).json({ error: "Projects Irretrievable" }));
  })
  .post((req, res) => {
    const project = req.body;
    db.insert(project)
      .into("projects")
      .then(newProject => res.status(201).json(newProject))
      .catch(err =>
        res.status(500).json({ error: "The project could not be added." })
      );
  });

router
  .route("/actions")
  .get((req, res) => {
    db("actions")
      .then(actions => res.status(201).json(actions))
      .catch(err => res.status(500).json({ error: "Actions Irretrievable" }));
  })
  .post((req, res) => {
    const action = req.body;
    db.insert(action)
      .into("actions")
      .then(newAction => res.status(201).json(newAction))
      .catch(err =>
        res.status(500).json({ error: "The action could not be added." })
      );
  });

router.route("/projects/:id").get((req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .then(project => {
      if (!project || project < 1)
        return res.status(404).json({ error: "Project ID not found" });
      return db("actions")
        .select(
          "actions.id",
          "actions.description",
          "actions.notes",
          "actions.completed"
        )
        .where({ project_id: id })
        .then(actions => res.status(200).json([...project, { actions }]))
        .catch(err => res.status(500).json({ error: "Action ID not found." }));
    })
    .catch(err =>
      res.status(500).json({
        error: "ID Irretrievable"
      })
    );
});

module.exports = router;
