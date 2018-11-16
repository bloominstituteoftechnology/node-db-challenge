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
            .into('project')
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
server.get('/api/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pPromise = db('project')
            .where('project.id', '=', id)
            .first()
       const aPromise = db('action')
            .where('action.projectID', '=', id)
       const result = await Promise.all([ pPromise, aPromise ]);
       const [project, action] = result;
       if (project) {
           return res.status(200).json({ ...project, action });
        } else {
            return res.status(404).json({ message: "The project with the specified ID does not exist.", error: error });
        }
    } catch (error) {
        res.status(500).json({ message: "The project information could not be retrieved.", error: error })
    }
})

const port = 8000
server.listen(port, () => console.log(`=== PORT: 8k ===`))