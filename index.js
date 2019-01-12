const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');
const helper = require('./helpers.js')

const server = express();
const db = knex(dbConfig.development);
const PORT = 5001;

server.use(express.json());

server.post('/api/project', (req, res) => {
    const project = req.body;
    if(project.project_name && project.project_description) {
        db('project').insert(project)
        .then(idInfo => {
            res.status(201).json(idInfo)
        })
        .catch(err => {
            res.status(500).json({err: 'error adding project'})
        })
    } else {
        res.status(400).json({ err: 'missing information'})
    }
})

server.post('/api/action', (req, res) => {
    const action = req.body;
    if(action.action_description && action.project_id) {
        db('action').insert(action)
        .then(idInfo => {
            res.status(201).json(idInfo)
        })
        .catch(err => {
            res.status(500).json({err: 'Error adding action'})
        })
    } else {
        res.status(400).json({err: 'Missing information'})
    }
})

// server.get('/api/project/:id', (req, res) => {
//     const {id} = req.params;
//     db('action')
//     .where('project_id', id)
//     .leftJoin('project', 'project.id', 'project_id')
//     .then(info => {
//         res.json(info)
//     })
//     .catch(err => {
//         res.status(500).json({err: 'error getting that project and actions'})
//     })
// })

server.get('/api/project/:id', (req, res) => {
    const {id} = req.params;
    let project = [];

    db('project').where('id', id)
    .then(projectInfo => {
        project = [projectInfo[0]];
        helper.getActions(id)
        .then(actionInfo => {
            project[0].actions = actionInfo;
            res.json(project)
        })
    })
    .catch(err => {
        res.status(500).json({err: 'error getting that project and actions'})
    })
})

server.get('/api/project', (req, res) => {
    db('project')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: 'Error getting projects'})
    })
})

server.get('/api/action', (req, res) => {
    db('action')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: 'Error getting action'})
    })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

//helper.getActions(1)