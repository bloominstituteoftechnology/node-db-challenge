const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const server = express();

server.use(express.json());
server.use(helmet());

/// ---------- API END POINTS ---------- ///

// API [GET] check
server.get('/', (req, res) => {
    res.send('API is working!')
})

// [GET] actions (Get actions)
server.get('/api/actions', (req, res) => {
    db('action').then(rows => {
        res.json(rows);
    })
    .catch(err => {
        res.status(500).json(rows);
    })
})

// [GET] projects (Get projects)
server.get('/api/projects', (req, res) => {
    db('project').then(rows => {
        res.json(rows);
    })
    .catch(err => {
        res.status(500).json(rows);
    })
})

// [GET] actions by project id (Get project with all actions)
server.get('/api/projects/:id/actions', (req, res) => {
    const { id } = req.params;

    db('project').where('project_id', id )
    .then(rows => {
        res.json(rows);
    })
    .catch(err => {
        res.status(500).json({err: 'Failed to get actions by project id'});
    })
})

// [POST] project (Add Project)
server.post('/api/projects', (req, res) => {
    const project = req.body;

    db('project').insert(project)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        res.status(500).json({err: 'Failed to add project'});
    })
})

// [POST] actions (Add Action)
server.post('/api/actions', (req, res) => {
    const action = req.body;

    db('action').insert(action)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        res.status(500).json({err: 'Failed to add action'});
    })
})

/// ---------- SERVER PORT ---------- ///
server.listen(4567, () => {
    console.log("App listening on port 4567")
})

