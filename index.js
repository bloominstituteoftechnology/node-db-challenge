const express = require('express');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

server.use(express.json());

const port = 3300;

server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

server.post('/api/projects', (req,res) => {
    const project = req.body;
    db('projects')
    .insert([project])
    .returning('id')
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//JUST FOR CHECKING TESTS
server.get('/api/projects', (req,res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/api/actions', (req,res) => {
    db('actions')
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.post('/api/actions', (req,res) => {
    const action = req.body;
    db('actions')
    .insert(action)
    .returning('id')
    .then(actionID => {
        res.status(201).json(actionID);
    })
    .catch(err => {
        res.status(200).json(err);
    })
})

server.get('/api/projects/:id', async(req,res) => {
    try {
    const {id} = req.params;
    const project = 
    await db('projects')
    .where('id', '=', id)
    .first();

    const actions = 
    await db('actions')
    .where('ProjectID', '=', id);

    return project
    ? res.status(200).json({...project, actions})
    : res.status(404).json({message: "Could not find project"})
    } catch (err) {
        res.status(500).json(err);
    }
    
})