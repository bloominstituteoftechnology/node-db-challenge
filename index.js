const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('HELLO');
})

server.post('/api/projects', (req, res) => {
    db.insert(req.body)
        .into('projects')
        .then(projects => res.status(200).json(projects))
        .catch(error => res.status(500).json(error));
})

server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.post('/api/actions', (req, res) => {
    db.insert(req.body)
        .into('actions')
        .then(actions => res.status(200).json(actions))
        .catch(error => res.status(500).json(error));
})

server.get('/api/actions', (req, res) => {
    db('actions')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    db('projects').where({ id }).first()
        .then(project => {
            if (project) {
                db('actions')
                    .where({ project_id: id })
                    .then(actions => {
                        project.actions = actions;
                        res.status(200).json(project);
                    })
                    .catch(err => res.status(500).json(err))
            }
        })
        .catch(err => res.status(500).json(err));
});
server.listen(8000, () => console.log('\n== Port 8000 ==\n'));
