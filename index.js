const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development)

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send('api working')
  });

//project CRUD
server.get('/project', (req, res) =>{
    db('project')
    .then(p => {
        res.status(200).json(p)
    })
    .catch(err => res.status(500).json(err))
})

server.get('/project/:id', (req, res) =>{
    // const pa = db('project').join('actions', {'project.id':'project.actions.id'})
    const { id }= req.params
    db('project').where({ id })
    .then(p => {
        db('actions')
            .where({ project_id : id })
            .then(a => {
                res.status(200).json({ p, a })
            }).catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
})

server.post('/project', (req,res) => {
    db('project').insert(req.body)
    .then(p => {
        res.status(200).json(p)
    })
    .catch(err => res.status(500).json(err))
})

//action CRUD
server.get('/actions', (req, res) =>{
    db('actions')
    .then(p => {
        res.status(200).json(p)
    })
    .catch(err => res.status(500).json(err))
})

server.post('/actions', (req,res) => {
    db('actions').insert(req.body)
    .then(p => {
        res.status(200).json(p)
    })
    .catch(err => res.status(500).json(err))
})

const port = 3300;
server.listen(port, function(){
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
})