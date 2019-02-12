const express = require('express');
const router = express.Router();

const db = require('../data/actionsModel');
const projectDb = require('../data/projectsModel');

router.get('/', (req, res) => {
    db.get()
        .then(actions => {
            res.json(actions)
        })
        .catch(err => {
            res.status(500).json({ message: "Can not fetch actions." })
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.get(id)
        .then(action => {
            if(Object.keys(action).length === 0){
                res.status(404).json({ message: "Invalid action ID." })
            } else {
                res.json(action)
            }
        })
        .catch(err => {
            res.status(500).json({ message: "That action can not be fetched.." })
        })
});

router.post('/', (req, res) => {
    const action = req.body;
    const id = req.body.project_id;
    if(action.action_description && action.action_notes && action.project_id){
        projectDb.get(id)
            .then(project => {
                if(Object.keys(project).length === 0){ res.status(404).json({ message: "Invalid project ID.." })
                } else {
                    db.add(action).then(newAction => {res.status(201).json(newAction)
                        })
                        .catch(err => {res.status(404).json({ message: "Error adding this action to your project" })})
                }
            })
            .catch(err => res.status(404).json({ message: "Invalid project ID." }))
    } else if(action.action_description && action.action_notes){
        res.status(400).json({ message: "Provide the project ID?" })
    } else if (action.action_description && action.project_id){
        res.status(400).json({ message: "Note field required." })
    } else if (action.action_notes && action.project_id){
        res.status(400).json({ message: "Description field required." })
    } else {
        res.status(400).json({ message: "Provide all the required fields" })
    }
})

module.exports = router;