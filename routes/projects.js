const express = require('express');
const knex = require('knex');
const router = express.Router();

//Knex
const dbConfig = require('../knexfile.js');
const db = knex(dbConfig.development);

//Get and post projects
router.get('/api/projects', (req,res) => {
    db('project')
    .then( project => {
        if(!project) {
            res.status(404).json({errorMessage:`Failed to the projects now`})
        }
        console.log(project);
        res.json(project);
    })
    .catch(err => {
           res.status(500).json({error:`Failed to fetch the projects`});
    });
});

router.post('/api/projects', (req,res) => {
     const project = req.body;
     if(!project) res.status(404).json({Message: `Make sure you add a valid project`});
     db('project')
        .insert(project)
        .then( projectCount => {
            res.status(201).json(projectCount)
        })
        .catch(err => {
          res.status(500).json({error:`Failed to create a new project at this time`});
     });
})


module.exports = router;