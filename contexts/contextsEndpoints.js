const express = require('express');

const contexts = require('./contextsController');

const contextsRouter = express.Router();

contextsRouter.post('/', (req, res) => {
  const context = req.body;

  contexts
    .insert(context)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

// Update project in the contexts table
contextsRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  contexts
    .update(id, req.body)
    .then(project => {
      res.status(200).json({ success: true });
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

// Delete project from projecs table based on id
contextsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  contexts
    .remove(id)
    .then(() => {
      res.status(200).json({ message: 'context has been deleted' });
    })
    .catch(err => {
      res.status(500).json({ error });
    });
});

contextsRouter.get('/', (req, res) => {
  contexts.get().then(contexts => {
    res.status(200).json(contexts);
  }).catch;
  res.status(500).json({ error });
});

module.exports = contextsRouter;
