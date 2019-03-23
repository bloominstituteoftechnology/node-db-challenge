const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.get('/api/projects', (req, res) => {
    return db('projects')
        .then(projs => {
            res.status(200).json(projs)
        }).catch(err => {
            res.status(500).json(err)
        })
})

server.get('/api/actions', (req, res) => {
    return db('actions')
        .then(acts => {
            res.status(200).json(acts)
        }).catch(err => {
            res.status(500).json(err)
        })
})

server.get('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await db('projects').first();

        const actions = await db('actions').where('projects_id', id);
        res.status(200).json({...project, actions});

    } catch(error) {
        res.status(500).json(error)
    }
})

server.post('/api/projects', (req, res) => {
    return db('projects')
        .insert(req.body)
        .then(projs => {
            res.status(200).json(projs)
        }).catch(err => {
            res.status(500).json(err)
        })
})

server.post('/api/actions',(req, res) => {
    return db('actions')
    .insert(req.body)
    .then(acts => {
        res.status(200).json(acts)
    }).catch(err => {
        res.status(500).json(err)
    })
});


server.listen(3300, () => console.log('\nServer Listening on port: 3300\n'));