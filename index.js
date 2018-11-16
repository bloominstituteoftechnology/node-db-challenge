const express = require('express');
const server = express();
const port = 5001;

const projects = require('./data/helpers/projectModel');
const actions = require('./data/helpers/actionsModel');

server.use(express.json());

server.get('/api/projects', (req, res) => {
    projects.get()
            .then(project => {
                if(project) {
                    res.status(201).json(project)
                } else {
                    res.status(404).json({message: 'No available project'})
                }
            }).catch(err => {
                res.status(500).json({message: 'Error unavailable', err})
            })
})

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    projects.get(id)
            .then(project => {
                if(project.id) {
                    res.status(201).json(project)
                } else {
                    res.status(404).json({message: 'No project by that id'})
                }
            }).catch(err => {
                res.status(500).json({message: 'Error unavailable', err})
            })
})

server.post('/api/projects/', (req, res) => {
    const { name, description } = req.body;
    projects.insert({name, description})
            .then(project => {
                if(project) {
                    res.status(200).json(project)
                } else {
                    res.status(400).json({ message: "error please provide both name and description"})
                }
               
            })
            .catch(err => {
                res.status(500).json({ message: "Can not add new project"})
            })
})

server.get('/api/actions', (req, res) => {
    actions.get()
           .then(action => {
               if(action){
                   res.status(201).json(action)
               } else {
                   res.status(404).json({message: 'No actions'})
               }
           }).catch(err => {
               res.status(500).json({message: 'error', err})
           })
})

server.post('/api/actions', (req, res) => {
    const { project_id, description, notes } = req.body;
    actions.insert({ project_id, description, notes})
           .then(action => {
               if(action){
                   res.status(201).json(action)
               } else {
                   res.status(404).json({message: 'Please provide all the body'})
               }
           }).catch(err => {
               res.status(500).json({message:'error'})
           })
})
































server.listen(port, ()=> {
    console.log(`${port} is up and running`)
})