const express = require('express');
const actionsRouter = express.Router();
const db = require('./actionsController');


actionsRouter.get('/', (req, res) => {
  db.getAll()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

actionsRouter.post('/', (req, res) => {
  const { description, notes, completed } = req.body;

  if (!description || !notes) {
    res.status(404).json({message: 'Must provide description, notes, and completed fields for action.'});
  } else {
    db.add(req.body)
      .then(response => {
        res.status(201).json({message: 'Successfully added action.'})
      })
      .catch(error => {
        res.status(500).json(error);
      })
  }
});

actionsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(response => {
      res.status(202).json({message: 'Successfully deleted action'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

actionsRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const actionInfo = req.body;

  db.update(id, actionInfo)
    .then(response => {
      res.status(201).json({message: 'Successfully updated action.'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});
module.exports = actionsRouter;