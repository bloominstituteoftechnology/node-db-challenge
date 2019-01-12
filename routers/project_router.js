const express = require('express');
const router = express.Router();
const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  db('project')
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ err: "Failed to find projects" });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  db('project')
  .then(project => {
    if (project.length > 0) {
      res.json(project);
    } else {
      res.status(404).json({ err: "The project with the specified ID does not exist." });
    }
  })
  .catch(err => {
    res.status(500).json({ err: "Failed to find project." });
  });
});

router.post('/:id', (req, res) => {
  const project = req.body;

  if (project.name && project.description) {
    db('project')
    .insert(project)
    .then((ids) => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ err: "Failed to insert project." });
    });
  } else {
    res.status(400).json({ message: "Provide project name and description." });
  }
});

module.exports = router;