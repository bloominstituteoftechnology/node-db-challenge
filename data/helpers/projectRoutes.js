const express = require("express");

const projects = require("./projectsModel.js");
const knex = require("knex");

const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);
const router = express.Router();

// get a list of projects
router.get("/", (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

//get project by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        db("actions")
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          })
          .catch(err => res.json(err));
      } else {
        res.status(404).json({ error: "U dun broke it." });
      }
    })
    .catch(err => res.status(500).json(err));
});

//create projects
router.post("/", (req, res) => {
  const project = req.body;

  projects
    .addProject(project)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
