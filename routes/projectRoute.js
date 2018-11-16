// Build the API with the following endpoints:
//   - POST for adding projects.
//   - GET for retrieving a `project` by its `id` that returns an object
//   with the following structure:
const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const router = express.Router();



router.get('/', (req, res) => {
  db('project')
    .then(projects => res.status(200).json(projects))
    .catch( error => res.status(500).json({message: 'an error occured while retrieving data', error}))
})

// adds a new project
router.post('/', (req, res) => {
  const project = req.body;
  
  db('project')
    .insert(project)
    .then( count => {
      res.status(201).json(count)
    })
    .catch( error => {
      console.log(project)
      res.status(500).json({message: 'Error adding new project', error})
    })
})


module.exports = router;