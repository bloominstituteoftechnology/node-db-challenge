// Build the API with the following endpoints:
//   - GET for retrieving a `project` by its `id` that returns an object
//   with the following structure:
const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const router = express.Router();


//gets all projects
router.get('/', (req, res) => {
  db('project')
    .then(projects => res.status(200).json(projects))
    .catch( error => res.status(500).json({message: 'an error occured while retrieving data', error}))
})

//gets all projects by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('project')
    .where('id', id)
    .then(project => {
      if(!project) {
        res.status(404).json({message: 'Could not find a project with that Id'})
      }
      db('action')
        .where('project_id', id)
        .select('action.id', 'action.description', 'action.notes', 'action.completed')
        .then(actions => {
          project[0].action = actions;
          res.status(200).json(project)
        })
        .catch(error => {
          res.status(500).json({message: 'Error getting project', error})
        }) 
    })
    
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
      res.status(500).json({message: 'Error adding new project', error})
    })
})


module.exports = router;