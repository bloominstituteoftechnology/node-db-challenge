const express = require('express');
const db = require('../controllers/actionController');
const actionRouter = express.Router();

actionRouter.get('/', (req, res) => {
  db
    .getAll()
    .then(actions => {
      if(actions) {
        res.status(200).send(actions);
      } else {
        res.status(404).send({ msg: 'There don\'t appear to be any actions' });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error retrieving actions.', error: err });
    })
});

actionRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    getById(id)
    .then(actions => {
      if(actions.length > 0) {
        res.status(200).send(actions);
      } else {
        res.status(404).send({ msg: `Unable to find action with ID ${id}` });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error retrieving actions', error: err });
    })
});

actionRouter.post('/', (req, res) => {
  const newAction = req.body;

  if (!req.body.description || !req.body.notes) {
    res.status(400).send({ msg: 'You must include both description and notes to create a new action' });
  } else {
    db
      .createAction(newAction)
      .then(action => {
        res.status(201).send(action);
      }).catch(err => {
        res.status(500).send({ msg: 'Error creating a new action', error: err });
      })
  }
});

actionRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedAction = req.body;

  if (!req.body.description || !req.body.notes) {
    res.status(400).send({ msg: 'You must include both a description and notes to update an action' });
  } else {
    db
      .updateAction(id, updatedAction)
      .then(updated => {
        if (updated > 0) {
          res.status(200).send({ msg: 'Actions updated successfully' });
        } else {
          res.status(404).send({ msg: `Unable to find action with ID ${id}` });
        }
      }).catch(err => {
        res.status(500).send({ msg: 'Error updating action', error: err });
      })
  }
});

actionRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .deleteAction(id)
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).send({ msg: 'Action deleted successfully' });
      } else {
        res.status(404).send({ msg: `Unable to find action with ID ${id}` });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error deleting action', error: err });
    })
});

module.exports = actionRouter;