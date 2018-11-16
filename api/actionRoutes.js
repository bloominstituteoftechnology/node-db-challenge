// projectsRoutes.js
const express = require('express')

const db = require('../data/dataHelpers.js')

const router = express.Router();

const addActionEP = (req, res) => {
  const action = req.body;

  db.addAction(action)
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json(err) )
}

const echo = (req, res) => {
  res.status(200).json({
    message: 'hey this endpoint work!',
    params: req.params,
    query: (req.query ? req.query : ''),
    body: req.body
  });
}

router.post('/', addActionEP);

module.exports = router;
