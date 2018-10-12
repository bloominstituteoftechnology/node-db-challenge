const express = require('express');
const router = express.Router();
const db = require('./models/project_models');
const dbAction = require('./models/action_models');

// post to projects

router.post('/', (req, res) => {
  const { name, description, completed } = req.body;
  const project = { name, description, completed };
  db.addProject(project)
    .then(complete => res.status(201).json(complete))
    .catch(err => res.status(500).json(err));
});

// get projects

router.get('/', (req, res) => {
  db.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
