const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.json({ api: 'server is running!'});
})

server.post('/api/projects', (req, res) => {
    const body = req.body;
    db('projects')
    .insert(body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => res.status(500).json({ message: "Error posting a new project"}))
})

server.post('/api/actions', (req, res) => {
    const body = req.body;
    db('actions')
    .insert(body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => res.status(500).json({ message: "Error posting new action"}))
})

const port = 4000;
server.listen(port, function() {
    console.log(`\n API is listening on http://localhost:${port}`)
})