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

router.get('/api/projects/:id', (req,res) => {
       
        const {id}=req.params;
        let newProject = {};
        db('project').where('project.id', id).then( project => {
            if(!project) { res.status(404).json({Message: `Failed to find the project with the ID ${id}`})}
            newProject = Object.assign( {}, project[0]);
            db('actions')
            .where('project_id', id)
            .then(results => {
               res.status(200).json({...newProject, actions: results})
            })
       })
       .catch(err => {
           res.status(500).json({Message: `Failed to find the project with actions`});
       })
});

router.post('/api/projects', (req,res) => {
     const project = req.body;
     const {project_name, project_des} = project;

     if(!project) res.status(400).json({Message: `Make sure you add a valid project`});
     if(!project_name) res.status(400).json({Message:`Please enter a valid name`});
     if(!project_des) res.status(400).json({Message:`Please enter your project description`});

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