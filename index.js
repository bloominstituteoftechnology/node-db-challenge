const express = require('express');
const db = require('./data/db')

const server = express();
server.use(express.json());

const PORT = 3300

const projectModel = require("./helpers/projectModel")
const actionModel = require("./helpers/actionModel")

server.get('/projects', (req, res) => {
    projectModel
    .get()
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        return error;
    })
})

server.get('/projects/:id', (req, res) => {
    const {id} = req.params;
    projectModel
    .get(id)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        return error;
    })
})


server.get('/actions', (req, res) => {
    db('actions')
    .then(action => {
        res.status(200).json(action)
    })
    .catch(() => {
        res.status(500).json({message: 'action couldnt be found'})
    })
})


server.get('/actions/:id', (req, res) => {
    const {id} = req.params;

    db('actions')
    .where({id})
    .first()
    .then(action => {
        if (action) {
            res.status(200).json(action)
        } else{
            res.status(404).json({message: 'the action with the ID couldnt be found'})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


server.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})