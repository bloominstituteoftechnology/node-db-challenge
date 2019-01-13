const express = require('express');

const projectsDb = require('./modelHelpers');

const router = express.Router();

router.post('/', (req, res) => {
  const project = req.body;
  projectsDb
    .addProject(project)
    .then(count => {
      count
        ? res.status(201).json(count)
        : res.status(400).json({ err: 'Could not add project' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  projectsDb
    .getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  projectsDb
    .getProject(id)
    .then(project => {
      project ? res.json(project) : res.status(404).json({ err: 'no project' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
