const express = require('express');

const projects = require('./projectsController');

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
    .then(function(post) {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

postsRouter.get('/:id/tags', function(req, res) {
  const { id } = req.params;

  projects
    .getProjectTags(id)
    .then(function(tags) {
      res.status(200).json(tags);
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
