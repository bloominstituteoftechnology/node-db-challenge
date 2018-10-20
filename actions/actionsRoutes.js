const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const router = express.Router();

// read all actions
router.get('/', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// read actions by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db('actions').where({ id })
    .then(action => {
      if (action) {
        res.status(200).json(action[0]);
      } else {
        res.status(404).json({ message: 'action not found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});
  
// create actions
router.post('/', (req, res) => {
  const action = req.body;
  db.insert(action)
    .into('actions')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});
  
// update actions
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newAction = req.body;
  db('actions')
    .where({ id })
    .update(newAction)
    .then(action => {
      if (!action || action < 1) {
        res.status(404).json({ message: 'No records found to update' });
      } else {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});
  
// delete actions
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .del()
    .then(action => {
      if (!action || action < 1) {
        res.status(404).json({ message: 'No records found to delete' });
      } else {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;