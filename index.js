const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)
const server = express()

server.use(express.json())
server.use(helmet()) 

server.get('/', (req, res) => {
    res.send('WOW it is working')
});

// get all project
server.get('/api/projects', (req, res) => {
    db('project')
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
});

const port = 9000;
server.listen(port, function(){
    console.log(`\n===APP listening on port ${port} ===\n`)
})