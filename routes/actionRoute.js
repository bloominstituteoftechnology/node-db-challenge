// Build the API with the following endpoints:
//   - POST for adding actions.
//
const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const router = express.Router();


//gets all actions
router.get('/', (req,res) => {
  db('action')
    .then(actions => res.status(200).json(actions))
    .catch( error => res.status(500).json({message: 'Error occured while retrieving data', error}))
})

//adds a new action

router.post('/', (req, res) => {
  const action =  req.body;
  console.log(action)
  db('action')
    .insert(action)
    .then( count => {
      res.status(201).json(count)
    })
    .catch( error => {
      res.status(500).json({message: "Error adding action", error})
    })
})

module.exports = router;