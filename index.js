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

// create project
server.post('/api/projects', (req, res) => {
    const project = req.body;

    if (!project.name || !project.description) {
        return res.status(404).json({message: 'Please fill all the require thing'})
    } else {
    db('project')
        .insert(project)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
    }
});

// get all action by project
server.get('/api/projects/:id/actions', (req, res) => {
    const { id } = req.params;
    db('action')
        .where({project_id: id})
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
});

// get project by id
server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    db('project')
        .where({id})
        .then(project => {
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({message: 'Project non found'})
            }
        })
});



const port = 9000;
server.listen(port, function(){
    console.log(`\n===APP listening on port ${port} ===\n`)
})