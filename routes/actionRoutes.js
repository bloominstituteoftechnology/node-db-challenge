// Imports
const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);
const errorHandler = require('../utils/errorHandler.js');
const router = express.Router();

// Routes
// GET
router.get('/', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error getting the actions.', error);
    });
});

// POST
router.post('/', (req, res) => {
  const newAction = req.body;

  db('actions')
    .insert(newAction)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error adding the action.', error);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db('actions')
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error deleting the action.', error);
    });
});

// PUT
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;

  db('actions')
    .where({ id })
    .update(update)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error updating the action.', error);
    });
});
module.exports = router;
