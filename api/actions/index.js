const db = require('../../database/dbConfig.js');
const express = require('express');
const router = express.Router();

// Get all actions
router.get('/api/actions', (req, res, next) => {
  db.select()
    .from('actions')
    .then(actions => res.status(200).json(actions))
    .catch(next)
}, (req, res, next) => {
  res.status(500).json(err);
});

// Create new action
router.post('/api/actions', (req, res, next) => {

  const { description, notes, completed, project_id } = req.body;

  db.insert({ description, notes, completed, project_id })
    .into('actions')
    .then(id => res.status(201).json({ id }))
    .catch(next)

}, (req, res, next) => {
  res.status(500).json(err);
});

module.exports = router;
