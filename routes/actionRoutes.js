// NODE MODULES, EXPRESS ROUTER
// ==============================================
const express = require('express');
const actionDb = require('../data/helpers/actionDb.js');
const projectDb = require('../data/helpers/projectDb.js');

const router = express.Router();

// ROUTES
// ==============================================
router.get('/', async (_, res) => {
  try {
    const actions = await actionDb.get();
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ error: 'The actions could not be retrieved from the database.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await actionDb.get(req.params.id);
    action
      ? res.status(200).json(action)
      : res.status(404).json({ message: 'The action with the specified ID does not exist.' });
  } catch (err) {
    res.status(500).json({ error: 'The action could not be retrieved from the database.' });
  }
});

router.post('/', async (req, res) => {
  if (req.body.project_id && req.body.description && req.body.notes) {
    try {
      const project = await projectDb.get(req.body.project_id);
      if (project) {
        try {
          const addedAction = await actionDb.insert(req.body);
          const action = await actionDb.get(addedAction.id);
          res.status(201).json(action);
        } catch (err) {
          res.status(500).json({ error: 'The action could not be retrieved from the database.' });
        }
      }
    } catch (err) {
      res.status(404).json({ message: 'The project with the specified ID does not exist.' });
    }
  } else {
    res.status(400).json({
      errorMessage: 'Please provide a projectID, description, and notes for the project.'
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await actionDb.remove(req.params.id);
    count
      ? res.status(200).json({ message: 'Successfully deleted action.' })
      : res.status(404).json({ message: 'The action with the specified ID does not exist.' });
  } catch (err) {
    res.status(500).json({ error: 'There was a database error deleting the action.' });
  }
});

router.put('/:id', async (req, res) => {
  if (req.body.project_id && req.body.description && req.body.notes) {
    try {
      const project = await projectDb.get(req.body.project_id);
      if (project) {
        try {
          const newAction = await actionDb.update(req.params.id, req.body);
          if (newAction) {
            const action = await actionDb.get(req.params.id);
            res.status(200).json(action);
          } else {
            res.status(404).json({ message: 'The action with the specified ID does not exist.' });
          }
        } catch (err) {
          res.status(500).json({ error: 'The action could not be retrieved from the database.' });
        }
      }
    } catch (err) {
      res.status(404).json({ message: 'The project with the specified ID does not exist.' });
    }
  } else {
    res.status(400).json({
      errorMessage: 'Please provide a projectID, description, and notes for the project.'
    });
  }
});

module.exports = router;
