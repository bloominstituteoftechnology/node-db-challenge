const express = require('express');
const router = express.Router();

const db = require('../data/db');

router.get('/', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

//Does not work
router.get('/:id', (req, res) => {
  const { action_id } = req.params;

  db('actions')
    .where({ action_id })
    .then(action => {
      if (action.length === 0) {
        res.status(404).json({ message: "The action with the specified ID does not exist." })
      }
      res.status(200).json(action);
    })
    res.status(500).json({ error: "The action information could not be retrieved." })
});

router.post('/', (req, res) => {
  const action = req.body;

  db.insert(action)
    .into('actions')
    .then(ids => {
      const id = ids[0];

      res.status(201).json(ids, ...action);
    })
    .catch(err => res.status(500).json(err));
});


module.exports = router;
