const express = require('express');

const repository = require('./projectsRepository');

const projectsRouter = express.Router();

projectsRouter.get('/', function(req, res) {  // /api/projects/
  repository
    .get()
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the projects' });
    });
});

projectsRouter.get('/:id', function(req, res) {  // /api/projects/:id
  const { id } = req.params;

  repository
    .get(id)
    .then(function(records) {
      if (records.length > 0) {
        res.status(200).json(records);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the project' });
    });
});

projectsRouter.post('/', function(req, res) {  // /api/projects/
  const { project } = req.body;

  repository
    .insert(project)
    .then(function(ids) {
      res.status(200).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not create the project' });
    });
});

module.exports = projectsRouter;