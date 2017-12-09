const express = require('express');

const repository = require('./contextsRepository');

const contextsRouter = express.Router();

contextsRouter.get('/', function(req, res) {  // /api/contexts/
  repository
    .get()
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the contexts' });
    });
});

contextsRouter.get('/:id', function(req, res) {  // /api/contexts/:id
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
      res.status(500).json({ error: 'Could not retrieve the context' });
    });
});

contextsRouter.post('/', function(req, res) {  // /api/contexts/
  const { context } = req.body;

  repository
    .insert(context)
    .then(function(ids) {
      res.status(200).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not create the context' });
    });
});

module.exports = contextsRouter;