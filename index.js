const express = require('express');
const knex = require('knex');
const dbConfig =require('./knexfile')
const db = knex(dbConfig.development)
const server = express();
server.use(express.json());

server.get('/api', (req, res) =>{
    res.send('running')
})

server.post('/api/projects', (req, res) => {
    const project = req.body;
    db.insert(project)
      .into('projects')
      .then(ids => {
        res.status(201).json(ids)
      }).catch(err => res.status(500).json({ error: "Unable to retrieve."}))
  })
  
server.get('/api/projects', (req, res) => {
    db('projects').then(projects=>{
        res.status(200).json(projects)
    }).catch(err => res.status(500).json({ error: "Unable to retrieve."}))
});

server.get('/api/projects/:id',  (req, res) => {
    const { id } =req.params;

    db('projects')
        .where({ id })
        .then(projects=>{
            res.status(200).json(projects)
        })
        .catch(err => res.status(500).json({ error: "Unable to retrieve."}))
})

server.put('/api/projects/:id', (req, res) => {
    const { id } =req.params;

    db('projects')
        .where({ id })
        .update(req.body)
        .then(projects=>{
            res.status(200).json(projects)
        })
        .catch(err => res.status(500).json({ error: "Unable to retrieve."}))
})

server.delete("/api/projects/:id", async (req, res) => {
    const { id } =req.params;

    db('projects')
        .where({ id })
        .del()
        .then(projects=>{
            res.status(200).json(projects)
        })
        .catch(err => res.status(500).json({ error: "Unable to retrieve."}))
});

server.post('/api/actions', (req, res) => {
    const action = req.body;
    db.insert(action)
        .into('actions')
        .then(ids => {
            res.status(201).json(ids)
        }).catch(err => res.status(500).json({ error: "Unable to retrieve."}))
})

server.get('/api/actions', (req, res) => {
    db('actions').then(actions=>{
        res.status(200).json(actions)
    }).catch(err => res.status(500).json({ error: "Unable to retrieve."}))
});

server.get('/api/actions/:id',  (req, res) => {
    const { id } =req.params;

    db('actions')
        .where({ id })
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(err => res.status(500).json({ error: "Unable to retrieve."}))
})


server.put('/api/actions/:id', (req, res) => {
    const { id } =req.params;

    db('actions')
        .where({ id })
        .update(req.body)
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(err => res.status(500).json({ error: "Unable to retrieve."}))
})

server.delete("/api/actions/:id", async (req, res) => {
    const { id } =req.params;

    db('actions')
        .where({ id })
        .del()
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(err => res.status(500).json({ error: "Unable to retrieve."}))
});


server.listen(5500, () =>{
    console.log(`server is listening on port 5500`)
})