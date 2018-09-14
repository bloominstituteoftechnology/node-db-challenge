const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API Running...');
});

//project endpoints

server.post('/api/projects', (req, res) => {
    const project = req.body;
    db
        .insert(project)
        .into('projects')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err));
});

server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
});

server.put('/api/projects/:id', (req, res) => {
    db('projects')
        .where({ id:req.params.id } )
        .update(req.body)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((fail) => {
            console.log(fail);
            res.status(404).json({ message: "The project with the specified ID does not exist."});
        });
});

server.delete('/api/projects/:id', (req, res) => {
    db('projects')
        .where({ id:req.params.id })
        .delete()
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((fail) => {
            console.log(fail);
            res.status(404).json({ message: "The project with the specified ID didn't delete."});
        });
});

//action endpoints

server.post('/api/actions', (req, res) => {
    const action = req.body;
    db
        .insert(action)
        .into('actions')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err));
});

server.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => res.status(500).json(err));
});

server.put('/api/actions/:id', (req, res) => {
    db('actions')
        .where({ id:req.params.id } )
        .update(req.body)
        .then((action) => {
            res.status(201).json(action);
        })
        .catch((fail) => {
            console.log(fail);
            res.status(404).json({ message: "The action with the specified ID does not exist."});
        });
});

server.delete('/api/actions/:id', (req, res) => {
    db('actions')
        .where({ id:req.params.id })
        .delete()
        .then((action) => {
            res.status(201).json(action);
        })
        .catch((fail) => {
            console.log(fail);
            res.status(404).json({ message: "The action with the specified ID didn't delete."});
        });
});

const port = 5000;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});