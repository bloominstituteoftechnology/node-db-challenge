const express = require('express');
const actions = require('./actionController');
const actionRouter = express.Router();

actionRouter.post('/', (req, res) => {
  const action = req.body;

  actions
    .insert(action)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

actionRouter.get('/', (req, res) => {
  actions
    .get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

actionRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  actions
    .update(id, req.body)
    .then((count) => {
      count > 0 ? res.status(200).json({ updated: count }) :
                  res.status(404).json(null);
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
})

actionRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  actions
    .remove(id)
    .then((count) => {
      res.status(200).json({ count })
    })
    .catch((error) => {
      res.status(500).json( { error });
    });
})

module.exports = actionRouter;