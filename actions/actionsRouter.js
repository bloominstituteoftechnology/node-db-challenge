const express = require('express');
const router = express.Router();
const db = require('../helpers/db-helper');

// endpoints
router.post('/api/actions/', async (req, res) => {
  const actionData = req.body;
  console.log(req.body);
  if (!actionData.description) {
    res.status(400).json({ errorMessage: 'Please provide a description for your action.' });
  } else {
    try {
      const newAction = await db.addAction(actionData);
      res.status(201).json(newAction);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'There was an error while saving the action to the database. The error is ', error });
    }
  }
});

module.exports = router;
