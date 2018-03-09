const express = require('express');
const actioncontext = require('./acController');
const acRouter = express.Router();

acRouter.post('/', (req, res) => {
  const ac = req.body;

  actioncontext
    .insert(ac)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

acRouter.get('/', (req, res) => {
  actioncontext
    .get()
    .then((actioncontext) => {
      res.status(200).json(actioncontext);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

acRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  actioncontext
    .update(id, req.body)
    .then((count) => {
      count > 0 ? res.status(200).json({ updated: count }) :
                  res.status(404).json(null);
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
})

acRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  actioncontext
    .remove(id)
    .then((count) => {
      res.status(200).json({ count })
    })
    .catch((error) => {
      res.status(500).json( { error });
    });
})

module.exports = acRouter;