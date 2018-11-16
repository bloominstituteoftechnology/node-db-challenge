const express = require('express');
const knex = require('knex')

const knexConfig = require('./knexfile')
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.get('/api/projects', async (req, res) => {
    try {
        const projects = await db('projects');
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ errorMessage: 'something went wrong' })
    }
})

server.get('/api/projects/:id', async (req, res) => {
    try {
        const id = req.params.id
        const actions = await db('actions').where('project_id', '=', id).select('actions.id', 'actions.description', 'actions.notes', 'actions.complete').as('actions');
        const project = await db('projects').where('id', '=', id).select('projects.id', 'projects.name', 'projects.description', 'projects.complete').first();
        res.status(200).json({ ...project, actions });
    } catch (error) {
        res.status(500).json({ errorMessage: 'soemthing didnt work.'})
    }
})

// server.post('/api/projects', async (req, res) => {

// })

const port = 8250
server.listen(port, console.log(`\n=== we are listening... on ${port} ===\n`));