const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js')

const port = 3333;
const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

//Testing Server
server.get('/', (req, res) => {
    res.send('Am I Alive?????'); //YES!
});

//Testing Project & Actions GET
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


server.get

server.listen(port, () => {
    console.log(`\n=== Listening on Port ${port} ===\n`)
});