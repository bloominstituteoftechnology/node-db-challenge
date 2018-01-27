const express = require('express');

const actions = require('./actionsController');

const actionRouter = express.Router();

actionRouter.post('/', function(req, res) {
  const action = req.body;

  actions
    .insert(actions)
    .then(function(id) {
      res.status(201).json(id);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

actionRouter.get('/', function(req, res) {
  actions
    .get()
    .then(function(actions) {
      res.status(200).json(actions);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

actionRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  actions
    .get(id)
    .then(function(action) {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

actionRouter.get('/:id/actions', function(req, res) {
  const { id } = req.params;

  actions
    .getActionPosts(id)
    .then(function(actions) {
      res.status(200).json(actions);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

actionRouter.put('/:id', function(req, res) {
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

actionRouter.delete('/:id', function(req, res) {
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

module.exports = actionRouter;
