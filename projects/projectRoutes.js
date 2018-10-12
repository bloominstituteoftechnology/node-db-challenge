const express = require('express');
const knex = require('knex');
 
const dbConfig = require('../knexfile');
 
const dbProjects = knex(dbConfig.development);

const router = express.Router();

router.get('/', (req,res) => {
    dbProjects('projects')
    .then (projects =>{
    res.status(200).json(projects)
    })
    .catch(err => res.status(500).json(err))
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    dbProjects('projects')
    .where({ id })
    .first()
    .then(project => {
        if(project) {
            dbProjects('actions')
            .where({ project_id: id })
            .then(actions => {
                project.actions = actions;
                 res.status(200).json(project);
            })
            .catch(err => res.json(err))
        } else {
            res.status(404).json({ error: 'Unable to locate project.'})
        }
    })
    .catch(err => res.status(500).json(err));
})

router.post('/', (req, res) => {
    const project = req.body;
    if(!project) {
        res.status(400).status({ error: "Please provide a name for your project."})
    }
    dbProjects.insert(project)
    .into('projects')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log("error", err);
        res
          .status(500)
          .json({ error: "The project could not be created." });
});

router.delete('/:id', (req, res) =>{
    dbProjects('projects')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if(count) {
        res.status(204).end()
        } else {
        res.status(404).json({ error: "There was no project with this id found."})
        }
    })
    .catch(err => {
        console.log("error", err);
        res.status(500).json({ error: "The project could not be deleted." });
    });
});

router.put('/:id' , (req ,res) => {
    const project = req.body;
    dbProjects('projects')
    .where({ id: req.params.id })
    .update(project)
    .then(project => {
    if(project) {
        res.status(200).json({ message: "This project was succesfully updated."})
    } else {
       res.status(404).json({ error: "Unable to locate this project."})
    }
    })
    .catch( err =>{
    res.status(500).json({ error: "This project could not be updated."})
    })
});
});

module.exports = router;