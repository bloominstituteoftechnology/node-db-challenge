const express = require('express');
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

const router = express.Router();


router.get('/', (req, res) => {
  db('projects').select()
  .then(projects => {
    console.log(projects)
    projects.length === 0 ?
    res.status(200).json({message: 'No Projects Listed, Send a Post request to list an Project'})
    :
    res.status(200).json(projects)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Error')
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('projects').where({ id }).select()
  .then(project => {
    console.log(project)
    project.length === 0 ?
    res.status(400).json({message: 'No Project Listed, check your id'})
    :
    res.status(200).json(project)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Error')
  });
});


router.post('/', (req, res) => {

  !req.body.name || !req.body.description ?
  res.status(400).json({message: 'You need a valid name AND description'})
  :
  null
  
  const { name, description } = req.body;
  const body = { name, description }

  db.insert(body).into('projects')
  .then(count => {
    res.status(200).json(count)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json('Error')
  });
})


router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('projects').where({id}).del()
  .then(count => {
    console.log(count);
    count === 0 ?
    res.status(400).json({message: 'Error deleting Project, check your id'})
    :
    res.status(200).json(count)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json('Error')
  });
})


router.put('/:id', (req, res) => {
  const { id } = req.params;

  !req.body.name && !req.body.description ?
  res.status(400).json({message: 'You need a valid name OR description'})
  :
  null
  
  const { name, description } = req.body;
  const body = { name, description }


  db('projects').where({id}).update(body)
  .then(count => {
    console.log(count);
    count === 0 ?
    res.status(400).json({message: 'Error updating Project, check your id'})
    :
    res.status(200).json(count)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json('Error')
  });
})


module.exports = router;
