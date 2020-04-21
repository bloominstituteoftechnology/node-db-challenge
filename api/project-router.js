const express= require("express");
const Projects = require('./project-model');
const router= express.Router()

router.get('/project', (req, res) => {
    Projects.getProject()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log("GET Project", err)
            res.status(500).json({ message: 'Failed to get list of projects' })
        })
        router.post('/', (req, res) => {
            const newProject = req.body
            Projects.insert(newProject)
                .then(project => {
                    res.status(201).json(project)
                })
                .catch(err => {
                    console.log("POST Project", err)
                    res.status(500).json({ error: "Could not save the project to the database" })
                })
        
        })
});


module.exports= router