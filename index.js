const express = require('express')
const server = express();
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
server.use(express.json());

server.post('/api/projects', (req, res) => {
    const project = req.body
    if(!project.name || !project.description || !project.completed || project.name.length === 0 || project.description.length === 0 || project.completed.length === 0) {
        res.status(404).json({ message: 'Could not process request, please provide a name, description, and a completed flag' })
    } else {
        db('project').insert(project)
            .then(id => {
                res.status(201).json({ id: id, project })
            })
            .catch(err => {
                res.status(500).json({ message: 'Error adding to database' })
            })
    }
})

server.post('/api/actions', (req, res) => {
    const action = req.body
    if(!action.description || action.description.length === 0 || !action.completed || action.completed.length === 0) {
        res.status(404).json({ message: 'Could not process request, please provide a description and completed flag, notes are optional' })
    } else {
        db('action').insert(action)
            .then(id => {
                res.status(201).json({ id: id, action })
            })
            .catch(err => {
                res.status(500).json({ message: 'Error adding to database' })
            })
    }
})

server.get('/api/projects/:id', (req, res) => {
    const id = req.params
    db('project')
        .where(id)
        .then(project => {
            if(project.length === 0) {
                res.status(404).json({ message: 'Could not find id in database' })
            } else {
                res.status(200).json(project)
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Error with database, please try again' })
        })
})

server.listen(9000, () => console.log('Running on port 9000'))