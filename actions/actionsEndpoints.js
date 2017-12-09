const express = require('express');

const repository = require('./actionsRepository');

const actionsRouter = express.Router();

actionsRouter.get('/', function(req, res) {  // /api/actions/
  repository
    .get()
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the actions' });
    });
});

actionsRouter.get('/:id', function(req, res) {  // /api/actions/:id
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
      res.status(500).json({ error: 'Could not retrieve the action' });
    });
});

actionsRouter.post('/', function(req, res) {  // /api/actions/
  const { action } = req.body;

  repository
    .insert(action)
    .then(function(ids) {
      res.status(200).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not create the action' });
    });
});

module.exports = actionsRouter;