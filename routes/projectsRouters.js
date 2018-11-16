const express = require("express");
const projects = require("../models/dataModel.js");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {
  const { name, description, completed } = req.body;
  const project = { name, description, completed };
  projects
    .postProject(project)
    .then(id => {
      res.status(200).json(id);
    })
    .catch(err => res.status(500).json(err.message));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projects
    .getProject(id)
    .then(project => {
      if (project) {
        db("actions")
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          })
          .catch(err => res.status(500).json(err.message));
      } else {
        res.status(404).json("No project with that ID found.");
      }
    })
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
