const express = require('express');
const contextsRouter = express.Router();
const db = require('./contextsController');


contextsRouter.get('/', (req, res) => {
  db.getAll()
    .then(contexts => {
      res.status(200).json(contexts);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

contextsRouter.post('/', (req, res) => {
  const { context } = req.body;

  if (!context) {
    res.status(404).json({message: 'Must provide context field.'});
  } else {
    db.add(req.body)
      .then(response => {
        res.status(201).json({message: 'Successfully added a new context.'});
      })
      .catch(error => {
        res.status(500).json(error);
      })
  }
});

contextsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(response => {
      res.status(202).json({message: 'Successfully deleted context'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

contextsRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const contextInfo = req.body;

  db.update(id, contextInfo)
    .then(response => {
      res.status(201).json({message: 'Successfully updated context.'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

module.exports = contextsRouter;