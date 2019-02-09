const express = require('express');
const router = express.Router();

const db = require('../data/projectsModel');

router.get('/', (req, res) => {
    db.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: "Can't fetch Projects.." })
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.get(id)
        .then(project => {
            if(Object.keys(project).length === 0){
                res.status(404).json({ message: "Invalid Project ID." })
            } else {
                res.json(project)
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Can't locate that project." })
        })
});

router.post('/', (req, res) => {
    const project = req.body;
    if(project.project_name && project.project_description){
        db.add(project)
            .then(newProject => {
                res.status(201).json(newProject)
            })
            .catch(err => {
                res.status(500).json({ message: "Project was declined. Please try again later." })
            })
    } else if(project.project_name){
        res.status(400).json({ message: "Project name field must be filled out." })
    } else if(project.project_description){
        res.status(400).json({ message: "Project description field must be filled out." })
    } else {
        res.status(400).json({ message: "Project name & description fields must be filled out." })
    }
})

module.exports = router;