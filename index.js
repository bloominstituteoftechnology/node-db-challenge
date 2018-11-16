const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();
server.use(express.json());


server.post('/projects', (req, res) => {
    const project = req.body;
    db('projects')
        .insert(project)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error Inserting' });
        })
});

server.post('/actions', (req, res) => {
    const action = req.body;
    db('actions')
        .insert(action)
        .then(id => {
            res.status(201).json(id);       
        })
        .catch(err => {
            res.status(500).json({ message: 'Error Inserting' });
        })
});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id })
        .first('id', 'name', 'description', 'completed')
        .then(project => {
            db('actions')
                .where({ project_id: id })
                .then(actions => {
                    project.actions = actions;
                    res.status(200).json(project);
                })
                .catch(err => {
                    res.status(500).json({ message: 'Error getting project' });
                })
        })
        .catch(err => {
            res.status(500).json({ message: 'Error getting project' });
        })
});

server.get('/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error getting project'});
        })
});

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id })
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.put('projects/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('projects')
        .where({ id })
        .update(changes)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});



server.listen(8000, () => console.log('Server is listening on port 8000'));