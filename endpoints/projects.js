const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

const router = express.Router();

//get all projects

router.get('/', (req, res) => {
    db('projects')
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    db('projects')
        .where({ id }).first()
        .then(project => {
            if (project) {
                console.log(project);
                db('actions')
                    .where({ project_id: id })
                    .then(action => {
                        project.action = action
                        console.log(action);
                        res.status(200).json(project)
                    })
                    .catch(err => {
                        res.status(500).json({ Message: 'Id not found', err })
                    })
            } else {
                res.status(500).json({ Message: 'error' })
            }
        })
});

//post project

router.post('/', (req, res) => {
    const newProject = req.body;
    db('projects')
        .insert(newProject)
        .then(project => {
            project
                ? res.status(200).json(project)
                : res.status(404).json({ Message: 'Project not added' })
        })
        .catch(err => {
            res.status(500).json({ Message: 'Error', err })
        })
});

// delete project

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({id})
        .del()
        .then( count =>{
            count
            ? res.status(200).json(count)
            : res.status(404).json({Message: 'Not found'})
        })
        .catch(err =>{
            res.status(500).json({Message: 'DB error', err})
        })
});

module.exports = router;