const express = require('express');
const knex = require('knex');
 
const knexConfig = require('../knexfile');
 
const database = knex(knexConfig.development);

const router = express.Router();

const broke = 'YOU BROKE IT!';

//################################### POST ########################################//
router.post('/', (req, res) => {
  const action = req.body;
  if(!action) {
      res.status(400).status({ message: `${broke}`})
  }
  database.insert(action)
  .into('actions')
  .then(ids => {
      res.status(201).json(ids);
  })
  .catch(err => res.status(500).json(err)) 
});

//################################### GET ########################################//
router.get('/', (req,res) => {
    database('actions')
    .then (actions =>{
    res.status(200).json(actions)
    })
    .catch(err => res.status(500).json(err))
});

router.get('/:id', (req,res) => {
    database('actions')
    .where({ id: req.params.id })
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => res.status(500).json(err));
});

//################################### DELETE ########################################//

router.delete('/:id', (req, res) =>{
    database('actions')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if(count) {
        res.status(204).end()
        } else {
        res.status(404).json({ message:  `${broke}`})
        }
    })
    .catch(err => res.status(500).json(err))
});

//################################### PUT ########################################//
router.put('/:id' , (req ,res) => {
    const action = req.body;
    database('actions')
    .where({ id: req.params.id })
    .update(action)
    .then(action => {
    if(action) {
        res.status(200).json({ message:  `${broke}`})
    } else {
       res.status(404).json({ message: `${broke}`})
    }
    })
    .catch( err =>{
    res.status(500).json({ message:  `${broke}`})
    })
});

module.exports = router;