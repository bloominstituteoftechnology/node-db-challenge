const express = require('express');

const projects = require('./data/helper/projectHelper');
const actions = require('./data/helper/actionHelper');

const server = express();
server.use(express.json());

server.get('/', (req, res, next)=> {
    res.send('Server Running');
})
//Get Projects
server.get('/api/projects', (req, res, next)=> {
    projects.find().then(response=> {
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).send(err)
    })
})

//Get Specific Project
server.get('/api/projects/:id', (req, res, next) => {
    let id = req.params.id;
    projects.find(id).then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).send(err)
    })
})

//Get Actions
server.get('/api/actions', (req, res, next) => {
    actions.find().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).send(err)
    })
})

//Get specifc Action
server.get('/api/actions/:id', (req, res, next) => {
    let id = req.params.id;
    actions.find(id).then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).send(err)
    })
})

server.use((req, res, next) => res.send('Unknown error please contact your system administrator'));

const port = 8000;
server.listen(port, ()=> console.log(`server running on port: ${port}`));