const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

// GET /api/actions
router.get('/', (req, res) => {
  db('actions').then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500).json({err: 'unable to retrieve actions'});
  });
});

module.exports = router;
