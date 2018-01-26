const express = require('express');

const contexts = require('./contextcontrollers');

const contextsRouter = express.Router();

contextsRouter.post('/', function(req, res) {
  const context = req.body;

  contexts
    .insert(context)
    .then(function(id) {
      res.status(201).json(id);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

contextsRouter.get('/', function(req, res) {
  contexts
    .get()
    .then(function(contexts) {
      res.status(200).json(contexts);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

contextsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  contexts
    .get(id)
    .then(function(context) {
      if (context) {
        res.status(200).json(context);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

contextsRouter.put('/:id', function(req, res) {
  const { id } = req.params;

  contexts
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

contextsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  contexts
    .remove(id)
    .then(function(count) {
      res.status(200).json({ count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = contextsRouter;