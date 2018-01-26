const express = require('express');

const projects = require('./projectsController');

const projectsRouter = express.Router();

// Add project to the projects table
projectsRouter.post('/', (req, res) => {
  const project = req.body;

  projects
    .insert(project)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

// Update project in the projects table
projectsRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  projects
    .update(id, req.body)
    .then(project => {
      res.status(200).json({ success: true });
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

// Delete project from projecs table based on id
projectsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  projects
    .remove(id)
    .then(() => {
      res.status(200).json({ message: 'Project has been deleted' });
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

projectsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  projects.get(id).then(projects => {
    res.status(200).json(projects);
  }).catch;
  res.status(500).json({ error });
});

module.exports = projectsRouter;
