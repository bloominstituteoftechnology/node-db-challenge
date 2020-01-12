const express = require('express');

const ProjectModel = require('./projectModel.js');

const router = express.Router();

// post equals find, find all projects
// code to change boolean from number to true or false

router.get('/', (req, res) => {
    ProjectModel.findAll()
    .then(projects => {
        let status = {
            ...projects, project_completed: projects.project_completed ? true : false
        };
        res.status(200).json(status);
    })
     .catch(error) 
            res.status(500).json
        ({ message: 'Projects not found', error });
    });

// post equals add, add a new project
    router.post('/', (req, res) => {
        const newProject = req.body;
        debug('projects')
        .insert(newProject)
        .then(projects => {
            res.status(201).json(projects);
        })
         .catch(error) 
                res.status(500).json
            ({ message: 'New project not created', error });
        });


    module.exports = router;
