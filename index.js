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

const port = 8250
server.listen(port, console.log(`\n=== we are listening... on ${port} ===\n`));