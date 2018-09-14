const express = require('express');
const knex = require('knex');
 
const dbConfig = require('../knexfile');
 
const db = knex(dbConfig.development);

const router = express.Router();

// project endpoints

router.get('/', (req,res) => {
    db('projects')
    .then (projects =>{
    res.status(200).json(projects)
    })
    .catch(err => res.status(500).json(err))
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    db('projects')
    .where({ id })
    .first()
    .then(project => {
        if(project) {
            db('actions')
            .where({ project_id: id })
            .then(actions => {
                project.actions = actions;

                res.status(200).json(project);
            })
            .catch(err => res.json(err))
        } else {
            res.status(404).json({ message: 'no project found'})
        }
    })
    .catch(err => res.status(500).json(err));
})

router.post('/', (req, res) => {
    const project = req.body;
    if(!project) {
        res.status(400).status({ message: "Please provide a name for project"})
    }
    db.insert(project)
    .into('projects')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err)) 
});

router.delete('/:id', (req, res) =>{
    db('projects')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if(count) {
        res.status(204).end()
        } else {
        res.status(404).json({ message: "There was no project with this id found"})
        }
    })
    .catch(err => res.status(500).json(err))
});

router.put('/:id' , (req ,res) => {
    const project = req.body;
    db('projects')
    .where({ id: req.params.id })
    .update(project)
    .then(project => {
    if(project) {
        res.status(200).json({ message: "This project has been updated"})
    } else {
       res.status(404).json({ message: "No project with this id was found"})
    }
    })
    .catch( err =>{
    res.status(500).json({ message: "Update Failed"})
    })
});


module.exports = router;



