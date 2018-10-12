const express = require("express");
const router = express.Router();
const db = require("../data/helper/projectHelpers");
const knex = require("knex");
const kc = require("../knexfile");
const mdb = knex(kc.development);

router.post("/", (req, res) => {
  const { name, description, completed } = req.body;
  const project = { name, description, completed };
  db.addProject(project)
    .then(c => res.status(201).json(c))
    .catch(err => res.status(500).json(err));
});

router.get("/", (req, res) => {
  db.getProjects()
    .then(projs => res.status(200).json(projs))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  mdb("projects")
    .where({ id })
    .first()
    .then(project => {
      mdb("actions")
        .where({ project_id: project.id })
        .then(actions => {
          res.status(200).json({
            id: project.id,
            name: project.name,
            description: project.description,
            completed: project.completed,
            actions:
              actions.map(a => ({
                id: a.id,
                description: a.description,
                notes: a.notes,
                completed: a.completed
              }))
          });
        });
    });
});

module.exports = router;
