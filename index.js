const express = require('express');
const helmet = require('helmet');

const db = require('./db/db.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/', (req, res) => {
    res.send('API running')
})

server.get('/api/projects', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
})

server.get('/api/actions', (req, res) => {
    db.getActions()
        .then(actions => {
            res.status(200).json(actions)
        })
})

server.post('/api/projects', (req, res) => {
    db.addProject(req.body)
        .then(count => {
            res.status(200).json(count)
        }).catch(err => console.log(err))
})

server.post('/api/actions', (req, res) => {
    db.addAction(req.body)
        .then(actionId => {
            res.status(200).json(actionId)
        })
})

server.listen(9000, () => console.log('\n == server running on 9000 ==\n'))