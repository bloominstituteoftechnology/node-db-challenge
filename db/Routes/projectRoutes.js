const express = require('express');

const router = express.Router();

const projectHelpers = require('../Models/ProjectModel');

router.get('/', (req, res) => {
  projectHelpers
    .getProjects()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  projectHelpers
    .getProjects(id)
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.post('/', (req, res) => {
  const project = req.body;
  projectHelpers
    .addProjects(project)
    .then(id =>
      res
        .status(201)
        .json({ message: `Successfully created user with id of ${id}` })
    )
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

module.exports = router;
