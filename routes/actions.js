const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

// POST /api/actions
router.post('/', (req, res) => {
  const action = req.body;
  db('actions').insert(action)
    .then(idInfo => {
      db('actions').get(idInfo.id)
        .then(action => {
          res.status(201).json(idInfo);
        });
    }).catch(err => {
      res.status(500)
        .json({err: 'failed to insert action into db'});
    });
});

// GET /api/actions
router.get('/', (req, res) => {
  db('actions').then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500).json({err: 'unable to retrieve actions'});
  });
});

module.exports = router;
