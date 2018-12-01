const express = require('express');

const actionModel = require('../data/helpers/actionModel');

const route = express.Router();

route.get('/', (req, res) => {
    actionModel.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({ message: 'Couldn\'t retrieve posts, please try again.'})
    })
})

route.get('/:id', (req, res) => {
    const {project_id} = req.params;
    actionModel.get(project_id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ message: 'Couldn\'t retrieve requested post.'})
    })
})

route.post('/', (req, res) => {
    const {project_id, description, notes} = req.body
    if( project_id.length === 0 || description.length === 0 || notes.length === 0) {
        return res.status(400).json({ error: 'A action id, description, and notes are required to submit a new action.'})
    } else {
        actionModel.insert({project_id, description, notes})
        .then(action => {
            res.status(200).json({message: 'complete'})
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to create a new action, please try again.'})
        })
    }
})

module.exports = route;