const express = require('express');
const projectDB = require('../helpers/projectModel');

const router = express.Router();

// const knex = require('knex');
// const dbConfig = require('../knexfile');
// const db = knex(dbConfig.development);

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  projectDB.get()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ err: "Failed to find projects" });
  });
});

// this now give me err: "Taild to find project."
router.get('/:id', (req, res) => {
  const { id } = req.params;

  projectDB.get(id)
  .then(project => {
    // if (project.length > 0) { // this messes it up, ***but it doesn't return it if number > project.length***
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ err: "The project with the specified ID does not exist." });
    }
  })
  .catch(err => {
    res.status(500).json({ err: "Failed to find project." });
  });
});

// I'll need to get this to work now too....
router.post('/', (req, res) => {
  const newProject = req.body;

  if (newProject.name && newProject.description) {
    projectDB
    .insert(newProject)
    .then(ids => {
      projectDB.get(ids.id)
      .then(project => {
        res.status(201).json(project);
      })
      // res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ err: "Failed to insert project." });
    });
  } else {
    res.status(400).json({ message: "Provide project name and description." });
  }
});

module.exports = router;