const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile');

const server = express();
const db = knex(knexConfig.development);

server.use(express.json());

const PORT = 3000;

server.post('/api/projects', (req, res)=>{
    const project = req.body;
    console.log(project)
    db('projects').insert(req.body)
    .then(response =>{
        res.status(201).json(response);
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({
            err: 'Failed to post new Project'
        });
    })
});



server.listen(PORT, ()=>{ console.log(`Listening to PORT ${PORT}`)})