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

server.get('/api/actions/:id', (req, res) => {
    db.getActions(req.params.id)
        .then(action => {
            res.status(200).json(action)
        })
})

server.get('/api/projects/:id', (req, res) => {
    db.getProjects(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
})

server.get('/api/projects/:id/actions', (req, res) => {
    db.getProjectActions(req.params.id).then(actions => {
        db.getProjects(req.params.id).then(project => {
            res.status(200).json({project, actions})
        })
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

server.put('/api/actions/:id', (req, res) => {
    db.editAction(req.body, req.params.id)
        .then(actionId => {
            res.status(200).json(actionId)
        })
})

server.put('/api/projects/:id', (req, res) => {
    db.editProject(req.body, req.params.id)
        .then(count => {
            res.status(200).json(count)
        })
})

server.delete('/api/projects/:id', (req, res) => {
    db.deleteProject(req.params.id)
        .then(count => {
            res.status(200).json(count)
        })
})

server.delete('/api/actions/:id', (req, res) => {
    db.deleteAction(req.params.id)
        .then(count => {
            res.status(200).json(count)
        })
})

server.listen(9000, () => console.log('\n == server running on 9000 ==\n'))