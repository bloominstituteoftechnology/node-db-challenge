const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

//PROJECTS endpoints

server.post('/projects', (req, res) => {
    const project = req.body;
    db.insert(project)
        .into('projects')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/projects', (req, res) => {
    db.select()
        .from('projects')
        .then(projects => {
            res.status(201).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


server.get('/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects')
        .where({id})
        .then(projects => {
            res.status(201).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.put('/projects/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;
    db('projects')
        .where({id})
        .update(changes)
        .then(count => {
            res.status(201).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.delete('/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects')
        .where({id})
        .del()
        .then(count => {
            res.status(201).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/projects/:id/actions', (req, res) => {
    const {id} = req.params;
    let project = {};
    db('projects')
        .where({id})
        .then(data => {
            project = {...data};
        })
        .catch(err => {
            res.status(500).json(err);
        });

    db('actions')
        .where({project_id:id})
        .then(actions => {
            console.log(actions);
            console.log(project);
            project.actions = actions;
            console.log(project.actions);
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//ACTIONS endpoints

server.post('/actions', (req, res) => {
    const action = req.body;
    db.insert(action)
        .into('actions')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/actions', (req, res) => {
    db.select()
        .from('actions')
        .then(actions => {
            res.status(201).json(actions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


server.get('/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions')
        .where({id})
        .then(actions => {
            res.status(201).json(actions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.put('/actions/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;
    db('actions')
        .where({id})
        .update(changes)
        .then(count => {
            res.status(201).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.delete('/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions')
        .where({id})
        .del()
        .then(count => {
            res.status(201).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});