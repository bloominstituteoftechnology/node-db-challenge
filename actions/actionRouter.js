const express = require('express');
const db = require('./actionController.js');
const actionRouter = express.Router();

actionRouter.get('/', (req, res) => {
  db
    .getActions()
    .then(actions => {
      if (actions.length > 0) res.status(200).json(actions);
      else res.status(200).json({ message: 'There are no actions in the database.' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error retrieving the actions.' });
    });
});

actionRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .getActionById(id)
    .then(actions => {
      if (actions.length > 0) res.status(200).json(actions);
      else res.status(200).json({ message: `There is no action with ID ${id}.` });
    })
    .catch(error => {
      res.status(500).json({ error: `Error retrieving the action with ID ${id}` });
    });
});

actionRouter.post('/', (req, res) => {
  const action = req.body;

  if (action.project_id && action.flag !== null && action.description.length > 0) {
    db
      .postAction(action)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error saving the action.' });
      });
  } else {
    res.status(500).json({ error: 'You must provide a project id and action description and flag. Notes are optional.' });
  };
});

actionRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;

  console.log('putting...');
  if (action.project_id && action.flag !== null && action.description.length > 0) {
    console.log('in Mordor...');
    db
      .putActionById(id, action)
      .then(count => {
        if (count > 0) {
          res.status(201).json({ message: `Action with ID ${id} updated successfully.` });
        } else {
          res.status(200).json({ message: `Action with ID ${id} not found.` });
        };
      })
      .catch(error => {
        res.status(404).json({ error: `Action with ID ${id} does not exist.` });
      });
  } else {
    console.log('missed Mordor');
    res.status(500).json({ error: 'You must provide a project ID, action description, and action flag; action notes are optional.' });
  }
});

actionRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .deleteActionById(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `Action ${id} deleted successfully.`});
      } else {
        res.status(200).json({ message: `Action with ID ${id} not found.` });
      };
    })
    .catch(error => {
      res.status(404).json({ error: `The action with ID ${id} could not be deleted.` });
    });
});

module.exports = actionRouter;