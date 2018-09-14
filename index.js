const express = require('express');
const helmet = require('helmet');
const knex = require('knex')
const server = express();
const dbConfig = require('./db/knexfile')

const db = knex(dbConfig.development);

server.use(express.json());
server.use(helmet());

// endpoints here

server.get('/', (req, res) => {
    res.send('Api Online')
})

// project

server.get('/api/project', (req, res) => {
    db('project')
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => res.status(500).json(err))
})

server.post('/api/project', (req, res) => {
    db.insert(project)
        .into('project')
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => res.status(500).json(err))
})

server.put('/api/project/:id', (req, res) => {
    const { id } = req.params

    db('project')
        .where({ id }).update(req.body)
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => res.status(500).json(err))
})

server.delete('/api/project/id', (req, res) => {
    const { id } = req.params;
    db("project")
        .where({ id })
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

const port = 3500;
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
