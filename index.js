const express = require('express');
const knex = require('knex');

const server = express();
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development)

server.use(express.json())

server.post('/api/projects', (req, res) => {
    const changes = req.body;
    db('project')
    .insert(changes)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => {
        res.status(500).json(err)
      })
})

server.post('/api/actions', (req, res) => {
    const changes = req.body;
    db('action')
    .insert(changes)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => {
        res.status(500).json(err)
      })
})

server.get('/api/projects', (req, res) => {
    db('project')
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
      })
})

server.get('/api/actions', (req, res) => {
    db('action')
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json(err)
      })
})

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
     db('project')
        .where({ id })
        .then(project => {
            db('action')
                .where({ project_id: id })
                .then(action => {
                    console.log(action);
                    return res
                        .status(200)
                        .json({ ...project, actions: action });
                });
        })
        .catch(() => {
            return res
                .status(500)
                .json({ Error: "Project info could not be retrieved." })
        });
});



const port = 8686;
server.listen(port, () => console.log(`\n==^_^== Listening on http://localhost:${port} ==^_^==\n`))