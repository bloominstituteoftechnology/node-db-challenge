const express = require('express');

const actions = require('./actionsController');

const actionsRouter = express.Router();

actionsRouter.post('/', (req, res) => {
  const action = req.body;

  actions
    .insert(action)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

// Update project in the actions table
actionsRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  actions
    .update(id, req.body)
    .then(project => {
      res.status(200).json({ success: true });
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

// Delete project from projecs table based on id
actionsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  actions
    .remove(id)
    .then(() => {
      res.status(200).json({ message: 'Action has been deleted' });
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

actionsRouter.get('/', (req, res) => {
  actions.get().then(actions => {
    res.status(200).json(actions);
  }).catch;
  res.status(500).json({ error });
});

module.exports = actionsRouter;
