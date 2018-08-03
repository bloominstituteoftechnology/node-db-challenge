const express = require('express');
const router = express.Router();

const db = require('../data/db');

router.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});


module.exports = router;
