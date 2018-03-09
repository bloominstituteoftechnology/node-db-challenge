const express = require('express');
const contexts = require('./contextController');
const contextRouter = express.Router();

contextRouter.post('/', (req, res) => {
  const context = req.body;

  contexts
    .insert(context)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

contextRouter.get('/', (req, res) => {
  contexts
    .get()
    .then((contexts) => {
      res.status(200).json(contexts);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

contextRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  contexts
    .update(id, req.body)
    .then((count) => {
      count > 0 ? res.status(200).json({ updated: count }) :
                  res.status(404).json(null);
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
})

contextRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  contexts
    .remove(id)
    .then((count) => {
      res.status(200).json({ count })
    })
    .catch((error) => {
      res.status(500).json( { error });
    });
})

module.exports = contextRouter;