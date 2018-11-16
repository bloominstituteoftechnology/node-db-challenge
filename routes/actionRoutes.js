// NODE MODULES, EXPRESS ROUTER
// ==============================================
const express = require('express');
const actionDb = require('../data/helpers/actionDb.js');
const projectDb = require('../data/helpers/projectDb.js');

const router = express.Router();

// ROUTES
// ==============================================
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

module.exports = router;
