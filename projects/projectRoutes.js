const express = require('express');
const knex = require('knex');
 
const knexConfig = require('../knexfile');
 
const database = knex(knexConfig.development);

const router = express.Router();

const broke = 'YOU BROKE IT!';

//################################### POST ########################################//

router.post('/', (req, res) => {
  const project = req.body;
  if(!project) {
      res.status(400).status({ message: `${broke}`})
  }
  database.insert(project)
  .into('projects')
  .then(ids => {
      res.status(201).json(ids);
  })
  .catch(err => res.status(500).json(err)) 
});

//################################### GET ########################################//
router.get('/', (req,res) => {
    database('projects')
    .then (projects =>{
    res.status(200).json(projects)
    })
    .catch(err => res.status(500).json(err))
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    database('projects')
    .where({ id })
    .first()
    .then(project => {
        if(project) {
            database('actions')
            .where({ project_id: id })
            .then(actions => {
                project.actions = actions;

                res.status(200).json(project);
            })
            .catch(err => res.json(err))
        } else {
            res.status(404).json({ message: `${broke}`})
        }
    })
    .catch(err => res.status(500).json(err));
})

//################################### DELETE ########################################//
router.delete('/:id', (req, res) =>{
    database('projects')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if(count) {
        res.status(204).end()
        } else {
        res.status(404).json({ message: `${broke}`})
        }
    })
    .catch(err => res.status(500).json(err))
});
//################################### PUT ########################################//
router.put('/:id' , (req ,res) => {
    const project = req.body;
    database('projects')
    .where({ id: req.params.id })
    .update(project)
    .then(project => {
    if(project) {
        res.status(200).json({ message: `${broke}`})
    } else {
       res.status(404).json({ message: `${broke}`})
    }
    })
    .catch( err =>{
    res.status(500).json({ message: `${broke}`})
    })
});


module.exports = router;