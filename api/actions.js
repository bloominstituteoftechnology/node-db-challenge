const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)
const router = express.Router();

/* ----  GET ALL ACTIONS ---- */
router.get('/', (req, res) => {
  db('actions')
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err))
})


/* ----  NEW ACTION ---- */
router.post('/', (req, res) => {
  const newAction = req.body
  db('actions')
    .insert(newAction)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})

module.exports = router;