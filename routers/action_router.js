const express = require('express');
const router = express.Router();
const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  db('action')
  .then(actions => {
    res.json(actions);
  })
  .catch(err => {
    res.status(500).json({ err: "Failed to find actions" });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  db('action').where('id', id)
  .then(action => {
    if (action.length > 0) {
      res.json(action);
    } else {
      res.status(404).json({ err: "The action with the specified ID does not exist." });
    }
  })
  .catch(err => {
    res.status(500).json({ err: "Failed to find action." });
  });
});

router.post('/:id', (req, res) => {
  const action = req.body;

  if (action.description && action.notes && action.project_id) {
    db('action')
    .insert(action)
    .then((ids) => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ err: "Failed to insert action." });
    });
  } else {
    res.status(400).json({ message: "Provide action description, notes, and project_id." });
  }
});

module.exports = router;