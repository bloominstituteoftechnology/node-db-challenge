//Project Routes

const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

//list all
router.get('/', (req, res) => {
    db('projects').then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
  });

  //knex create
router.post('/', (req, res) => {
    const project = req.body;
    db.insert(project)
    .into('projects')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  });

  //knex return by id
router.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const projects = await db('projects').where({ id }).first();
    res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

  //knex delete
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('projects')
    .where({ id })
    .delete()
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No project by  that id found to delete.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catach(error => res.status(500).json({ message: 'failed to delete project.'}));
  
  
  }); 
  
  //knex update 
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('projects')
    .where({ id })
    .update(changes)
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No projects found.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catach(error => res.status(500).json({ message: 'failed to update project.'}));
  });

  module.exports = router;