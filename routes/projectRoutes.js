const express = require('express')
const route = express.Router();
const projectDb = require('../data/helpers/projectDb.js')
const db = require('../data/dbConfig.js')



route.get('/:id', (req, res) => {
    const {id} = req.params
    projectDb.get(id)
    .then(project => {
        if (project) {
            db('actions as a')
            .where('a.project_id', id)
            .then(actions => {
                project.actions = actions
                res.status(200).json(project)
            })
        } else {
            res.status(404).json({message: 'project not found'})
        }
    })
    .catch(err => res.status(500).json(`something went wrong, please see error: ${err}`))
})

route.get('/', (req, res) => {
    projectDb.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => res.status(500).json(`something went wrong, please see error: ${err}`))
})

route.post('/', (req, res) => {
    const {name, description, complete, action} = req.body
    projectDb.create({name, description, complete})
    .then(project => {
        res.status(200).json({Message: `You successfully created a new project`})
    })
    .catch(err => res.status(500).json(err))
})

module.exports = route;
