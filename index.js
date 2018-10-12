const express = require('express');
const helmet = require('helmet');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

server.use(helmet());
server.use(express.json());

//routes

server.get('/api/projects', (req, res) => {
    db('projects').then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))
});

server.get('/api/projects/:id',  (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id })
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json(err))
})

server.post('/api/projects', (req, res) => {
    const project = req.body;
    db.insert(project)
      .into('projects').then(ids => res.status(201).json(ids))
      .catch(err => res.status(500).json(err))
  })

server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const updated = req.body;
    db('projects')
        .where({ id })
        .update(updated)
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json(err))
})

server.delete("/api/projects/:id", async (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id })
        .del()
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json(err))
});

server.get('/api/actions', (req, res) => {
    db('actions').then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err))
});

server.get('/api/actions/:id',  (req, res) => {
    const { id } = req.params;
    db('actions')
        .where({ id })
        .then(actions => res.status(200).json(actions))
        .catch(err => res.status(500).json(err))
})

server.post('/api/actions', (req, res) => {
    db.insert(req.body).into('actions')
        .then(ids => res.status(201).json(ids))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

server.put('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    const updated = req.body;
    db('actions')
        .where({ id })
        .update(updated)
        .then(actions => res.status(200).json(actions))
        .catch(err => res.status(500).json(err))
})

server.delete("/api/actions/:id", async (req, res) => {
    const { id } = req.params;
    db('actions')
        .where({ id })
        .del()
        .then(actions => res.status(200).json(actions))
        .catch(err => res.status(500).json(err))
});


//server

server.listen(9000, () => {
    console.log('Server started on port 9000');
})