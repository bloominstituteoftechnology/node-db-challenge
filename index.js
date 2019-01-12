const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = 5050;

server.use(express.json());

//endpoints for projects

server.post('/projects', (req, res) => {
    const project = req.body;
    db('projects').insert(project)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to create project' });
        });
});

server.get('/projects', (req, res) => {
    db('projects')
        .then(rows => {
            res.json(rows);
        }).catch(err => {
            res.status(500).json({ err: 'Failed to get projects' });
        });
});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id)
        .then(project => {
            db('actions')
                .where('project_id', id)
                .then(actions => {
                    project[0].actions = actions;
                    res.status(200).json(project);
                })
        }).catch(err => {
            res.status(500).json({ err: 'Failed to get project' });
        })
});

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id).del()
        .then(rowCount => {
            res.status(201).json(rowCount);
        }).catch(err => {
            res.status(500).json({ err: 'Failed to delete project' });
        });
});

//endpoints for actions

server.post('/actions', (req, res) => {
    const action = req.body;
    db('actions').insert(action)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to create action' });
        });
});

server.get('/actions', (req, res) => {
    db('actions').then(rows => {
        res.json(rows);
    }).catch(err => {
        res.status(500).json({ err: 'Failed to get actions' });
    });
});

server.delete('/actions/:id', (req, res) => {
    const { id } = req.params;
    db('actions').where('id', id).del()
        .then(rowCount => {
            res.status(201).json(rowCount);
        }).catch(err => {
            res.status(500).json({ err: 'Failed to delete action' });
        });
});

//listening
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});