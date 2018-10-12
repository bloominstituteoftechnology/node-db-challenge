const express = require('express');
const router = express.Router();
const db = require('../data/helper/projectHelpers');

router.post('/', (req, res) => {
  const { name, description, completed } = req.body;
  const project = { name, description, completed };
  db.addProject(project)
    .then(c => res.status(201).json(c))
    .catch(err => res.status(500).json(err));
});

router.get('/', (req, res) => {
  db.getProjects()
    .then(projs => res.status(200).json(projs))
    .catch(err => res.status(500).json(err));
});

module.exports = router;