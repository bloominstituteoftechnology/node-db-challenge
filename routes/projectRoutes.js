const express = require('express');

const projectModel = require('../data/helpers/projectModel');

const route = express.Router();

route.get('/', (req, res) => {
    projectModel.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: 'Couldn\'t retrieve posts, please try again.'})
    })
})

route.get('/:id', (req, res) => {
    const {id} = req.params;
    projectModel.get(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: 'Couldn\'t retrieve requested post.'})
    })
})

route.get('/:id/actions', (req, res) => {
    const {id} = req.params;
    projectModel.getProjectActions(id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({message: 'Couldn\'t retrieve actions'})
    })
})

route.post('/', (req, res) => {
    const {name, description} = req.body
    if( name.length === 0 || description.length === 0 ) {
        return res.status(400).json({ error: 'A project name and description are required to submit a new project.'})
    } else {
        projectModel.insert({name, description})
        .then(project => {
            res.status(200)
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to create a new project, please try again.'})
        })
    }
})

module.exports = route;