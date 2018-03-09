const express = require('express');
const db = require('./pActionController.js');
const pActionRouter = express.Router();

pActionRouter.get('/', (req, res) => {
  db
    .getPActions()
    .then(pActions => {
      if (pActions.length > 0) res.status(200).json(pActions);
      else res.status(200).json({ message: 'There are no project actions in the database.' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error retrieving the project actions.' });
    });
});

pActionRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .getPActionById(id)
    .then(pActions => {
      if (pActions.length > 0) res.status(200).json(pActions);
      else res.status(200).json({ message: `There is no project action with ID ${id}.` });
    })
    .catch(error => {
      res.status(500).json({ error: `Error retrieving the project action with ID ${id}` });
    });
});

pActionRouter.post('/', (req, res) => {
  const pAction = req.body;

  // if (project.name.length > 0) {
    db
      .postPAction(pAction)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error saving the project action.' });
      });
  // } else {
  //   res.status(500).json({ error: 'You must provide a project name.' });
  // };
});

module.exports = pActionRouter;