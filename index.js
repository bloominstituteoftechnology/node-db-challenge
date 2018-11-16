const express = require('express')
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
const server = express()
server.use(express.json())

// ===== SANITY CHECK =====
server.get('/', (req, res) => {
    res.send({ message: "API is running" })
})

// ===== POST PROJECT =====
server.post('/api/projects', (req, res) => {
    const{ name, description } = req.body
    if (!name || !description) {
        res.status(400).json({ message: "Provide name and description for the project." })
    } else {
        db('project')
            .insert(req.body)
            .into('projects')
            .then(project => {
                res.status(201).json(project)
            })
            .catch(error => {
                res.status(500).json({ message: "There was an error hwile saving the project to the database.", error: error})
            })
    }
})

// ===== POST ACTION =====
server.post('/api/actions', (req, res) => {
    const { description, notes, projectID } = req.body
    if (!description || !notes || !projectID) {
        res.status(400).json({ message: "Provide description, notes, and project ID for the action." })
    } else {
        db('action')
            .insert(req.body)
            .into('action')
            .then(action => {
                res.status(201).json(action)
            })
            .catch(error => {
                res.status(500).json({ message: "There was an error while saving the action to the database.", error: error })
            })
    }
})

// ===== GET PROJECT BY ID =====
server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params
    db('project')
        .join('action', { 'project.id': 'action.projectID' })
        .where({ id: id })
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json({ message: "The information could not be retrieved.", error: error })
        })
})

const port = 8000
server.listen(port, () => console.log(`=== PORT: 8k ===`))