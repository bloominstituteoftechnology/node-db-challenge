//Routes

const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

//Get all
router.get('/', (req, res) => {
    db('actions').then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
  });

//create
router.post('/', (req, res) => {
    const action = req.body;
    db.insert(action)
    .into('actions')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  });

//Return by id
router.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const actions = await db('actions').where({ id }).first();
    res.status(200).json(actions);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //Get action by id
  router.get('/:id/projects', (req, res) => {
    const { id } = req.params;
    db('actions')
    .join('projects', 'actions.id', '=', 'projects.id')
    .select('actions.action_description as action', 'projects.project_name')
    .where('projects.id', id)
    .then(response => {
      console.log(response)
      res.status(200).json(response)
    });
  });
  
//Delete
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('actions')
    .where({ id })
    .delete()
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No action found to delete by that id.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catach(error => res.status(500).json({ message: 'failed to delete action.'}));
  
  
  }); 
  
  //knex update 
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('actions')
    .where({ id })
    .update(changes)
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No actions found.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catach(err => res.status(500).json({ message: 'failed to update action.'}));
  });

  module.exports = router;