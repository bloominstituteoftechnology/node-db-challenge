const express = require('express');

const actions = require('./actionController');

const actionsRouter = express.Router();

actionsRouter.post('/', function(req, res) {
  const action = req.body;

  actions
    .insert(action)
    .then(function(id) {
      res.status(201).json(id);
    })
    .catch(function(err) {
      res.status(500).json({ error });
    });
});

actionsRouter.get('/', function(req, res) {
  actions
    .get()
    .then(function(posts) {
      res.status(200).json(posts);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

actionsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  actions
    .get(id)
    .then(function(action) {
      if (action) {
        res.status(200).json(post);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

actionsRouter.put('/:id', function(req, res) {
  const { id } = req.params;

  actions
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

actionsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  actions
    .remove(id)
    .then(function(count) {
      res.status(200).json({ count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = actionsRouter;
