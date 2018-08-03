const express = require('express');
const helmet = require('helmet');
const db = require('./data/db');

const port = 8000;
const server = express();

server.use(helmet());
server.use(express.json());
// server.use(cors({ origin: "http://localhost:3000" })) <-- don't need for now

server.listen(port, () => console.log(`Server is listening port ${port}`));

server.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
})

server.get('/projects', (req, res) => { 
    db('project').then(p => { res.status(200).json(p) })
 })
server.get('/projects/:id', (req, res) => { 
    db('projects').where(req.params.id).then(p => { res.status(200).json(p) })
 })
server.post('/projects/', (req, res) => { 
    const project = req.body;
    if(projects.name && project.descritption) {
        db('project')
             .insert(project)
             .then(p =>  res.status(200).json(p))
             .catch(error => res.json(error))
    } else {
        res.status(400).json({ message: 'Please provide both a name and description for the project' })
    }
 })
server.delete('/projects/:id', (req, res) => { 
    const { id } = req.params;
    db('project')
     .where({ id })
     .delete()
     .then(ids => {
        if(!ids) {
            res.status(404).json({ error: 'The user with specified ID does not exist'})
        }
        res.status(200).json(ids, { message: 'The user has been deleted' });
    })
     .catch(error => res.status(500).json(error))
 })
 server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const p = req.body;
    if(!p){
        res.status(400).json({ error: 'Please provide both a project name and description' })
    } 
    db('project')
    .where({ id })
     .update(p)
     .then(p => {
        const id = ids[0]
        if (!ids) {
                res.status(404).json({ error: 'The user with specified ID does not exist' })
            } else {
                res.status(200).json(id)
            }
     })
     .catch(err => {
        res.status(500).json(err);
      });
})

