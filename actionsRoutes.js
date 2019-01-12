const express = require('express');

const actionsDb = require('./modelHelpers');

const router = express.Router();

router.post('/', (req, res) => {
  const action = req.body;
  actionsDb
    .addAction(action)
    .then(count => {
      count
        ? res.status(201).json(count)
        : res.status(400).json({ err: 'Could not add action' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  actionsDb
    .getActions()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
