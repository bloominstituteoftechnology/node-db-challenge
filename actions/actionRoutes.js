const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) => {
  db('actions')
    .then( actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where({ id })
    .then(action => {
      if (action.length === 0) {
        res.status(200).send({ error: 'An action with this id does not exist.'});
      }
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const action = req.body;

  db.insert(action).into('actions')
    .then(ids => {
      const id = ids[0]
      res.status(201).json({id, ...action});
    })
    .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  const { description, notes, iscomplete } = req.body;
  const { id } = req.params;

  db('actions')
    .where({ id })
    .update({ description, notes, iscomplete })
    .then(count => {
      if (count) {
        db('actions')
          .where({ id })
          .then(action => {
            res.status(200).json(action);
          })
          .catch(err => res.status(500).json(err));
      } else {
        res.status(200).send({ error: 'An action with this id does not exist.'});
      }
    })
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let deletedaction;

  db('actions')
    .where({ id })
    .then(action => {
      if (action.length === 0) {
        res.status(200).send({ error: 'An action with this id does not exist.'});
      }
      deletedaction = action;
    })
    .catch(err => res.status(500).json(err));

  db('actions')
    .where({ id })
    .del()
    .then(count => {
      if (count) {
        res.status(200).json(deletedaction);
      } else {
        res.status(200).send({ error: 'An action with this id does not exist.'});
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;