const express = require('express');
const router = express.Router();

const db = require('../data/projectsModel');
const actionsDb = require('../data/actionsModel');

router.get('/', (req, res) => {
    db.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: "Can fetch project." })
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
            res.status(500).json({ message: "Can't find project." })
        })
});

router.get('/:id/actions', (req, res) => {
    const {id} = req.params;
    db.get(id)
        .then(project => {
            if(Object.keys(project).length === 0){
                res.status(404).json({ message: "Invalid Project ID." })
            } else {
                let projectObj = project; actionsDb.getActions(id).then(response => {
                        res.json({ 
                            id: projectObj.id, 
                            name: projectObj.project_name,
                            description: projectObj.project_description,
                            completed: projectObj.completed, 
                            actions: response})
                    })
                    .catch(err => res.json(err))
            }
        })
        .catch(err => {res.status(500).json({ message: "Can't find that project." })})
});

router.post('/', (req, res) => {
    const project = req.body;
    if(project.project_name && project.project_description){
        db.add(project)
            .then(newProject => {res.status(201).json(newProject)
            })
            .catch(err => {res.status(500).json({ message: "Your project was Denied." })
            })
    } else if(project.project_name){res.status(400).json({ message: "Project requires a description." })
    } else if(project.project_description){res.status(400).json({ message: "Project requires a name." })
    } else {res.status(400).json({ message: "Project requires a name and a description." })}
})

module.exports = router;