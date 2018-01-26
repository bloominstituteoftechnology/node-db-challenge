const express = require('express');

const projects = require('./projectscontroller');

const projectsRouter = express.Router();

projectsRouter.post('/', function(req, res) {
  const project = req.body;

  projects
    .insert(project)
    .then(function(id) {
      res.status(201).json(id);
    })
    .catch(function(err) {
      res.status(500).json({ error });
    });
});

projectsRouter.get('/', function(req, res) {
  projects
    .get()
    .then(function(projects) {
      res.status(200).json(projects);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  projects
    .get(id)
    .then(function(project) {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectsRouter.get('/:id/contexts', function(req, res) {
  const { id } = req.params;

  projects
    .getProjectContexts(id)
    .then(function(contexts) {
      res.status(200).json(contexts);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectsRouter.put('/:id', function(req, res) {
  const { id } = req.params;

  projects
    .update(id, req.body)
    .then(function(count) {
      if (count > 0) {
        res.status(200).json({ updated: count });
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  projects
    .remove(id)
    .then(function(count) {
      res.status(200).json({ count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = projectsRouter;