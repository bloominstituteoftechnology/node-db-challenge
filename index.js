const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const server = express();
server.use(express.json());

//Projects
// [POST] 
// [GET] get all 
// [GET] get by id
// [GET] get all the actions for a specific project
// [PUT]
// [DELETE]

server.get('/projects', (req, res) => {
    db('projects')
        .select()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects')
        .where({id:id})
        .select()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/projects/:id/actions', (req, res) => {
    const {id} = req.params;
    db('actions')
        .where({projectId:id})
        .select()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.post('/projects', (req, res) => {
    const project = req.body;

    db.insert(project)
        .into('projects')
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.put('/projects/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;

    db('projects')
        .where('id', '=', id)
        .update(changes)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.delete('/projects/:id', (req, res) => {
    const {id} = req.params;

    db('projects')
        .where({id:id})
        .delete()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});




//Actions
// [POST] 
// [GET] get all 
// [GET] get by id
// [PUT]
// [DELETE]

server.get('/actions', (req, res) => {
    db('actions')
        .select()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions')
        .where({id:id})
        .select()
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.post('/actions', (req, res) => {
    const action = req.body;

    db.insert(action)
        .into('actions')
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.put('/actions/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;

    db('actions')
        .where('id', '=', id)
        .update(changes)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.delete('/actions/:id', (req, res) => {
    const {id} = req.params;

    db('actions')
        .where({id:id})
        .delete()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


server.listen(8800, () => console.log('Server is running on port 8800'))