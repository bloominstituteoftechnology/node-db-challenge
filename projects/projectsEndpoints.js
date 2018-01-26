const express = require('express');

const repository = require('./projectsRepository');

const projectsRouter = express.Router();

projectsRouter.get('/', function(req, res) { '/api/projects/'
  repository
    .get()
    .then(function(records) {
      console.log("records: ", records);
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the projects' });
    });
});

projectsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  repository
    .get(id)
    .then(function(record) {
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the project' });
    });
});

projectsRouter.get('/:id/tags', function(req, res) { // /api/projects/:id/tags
  const { id } = req.params;

  repository
    .getPostTags(id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the post tags' });
    });
});

projectsRouter.post('/', function(req,   res) {
  const { project } = req.body;

  repository
    .insert(project)
    .then(function(ids) {
      res.status(200).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not create the projects' });
    });
});

module.exports = projectsRouter;
