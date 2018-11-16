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

router.post('/', (req, res) =>{
    const newProject = req.body;
    db('projects')
        .insert(newProject)
        .then(project =>{
            project
            ? res.status(200).json(project)
            : res.status(404).json({Message: 'Project not added'})
        })
        .catch(err => {
            res.status(500).json({Message: 'Error', err})
        })
});


module.exports = router;