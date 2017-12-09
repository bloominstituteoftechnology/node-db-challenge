const express = require('express');

const repository = require('./actionsRepository');

const actionRouter = express.Router();

actionRouter.get('/', function(req, res) {
  repository
    .get()
    .then(function(records) {
    res.status(200).json(records);
  })
  .catch(function(err) {
    res.status(500).json({ error: 'Could not retrieve the Project' });
  });
});

actionRouter.get('/:id', function(req, res) {
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
      res.status(500).json({ error: 'could not find the project by the specified id' });
    });
});

actionRouter.get('/:id/contexts', function(req, res) {
  const { id } = req.params;

  repository
    .getActionContext(id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retreive project actions context' });
    });
});

actionRouter.post('/', function(req, res) {
  const { project } = req.body;

  repository
    .insert(project)
    .then(function(ids) {
      res.status(200).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'could not create the project' });
    });
});

module.exports = actionRouter;