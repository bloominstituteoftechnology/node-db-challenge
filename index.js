const express = require('express');
const knex = require('knex');
const cors = require('cors');

const dbCOnfig = require('./knexfile');

const server = express();
const db = knex(dbCOnfig.development);
const Port = 6060;

server.use(express.json());
server.use(cors());


server.post('/api/Projects', (req, res) => {
    db('Projects').insert(req.body)
        .then(response => {
            res
                .status(201)
                .json(response);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({err: 'Failed to post new Project to Project list.'});
        })
});
server.post('/api/Project-Actions', (req, res) => {
    db('Project-Actions').insert(req.body)
        .then(response => { 
            res
                .status(201)
                .json(response);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({err: 'Failed to post new Action to it corresponding Project.'});
        })
});

server.get('/api/Projects', (req, res) => {
    db('Projects').select()
        .then(response => {
            res
                .status(200)
                .json(response);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({err: 'Failed to find Projects.'});
        })
});
server.get('/api/Projects/:id', (req, res) => {
    const {id} = req.params;
    db('Projects').where('id', id)
        .then(response => {
            res
                .status(200)
                .json(response);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({err: 'Failed to find Project with this id.'});
        })
});
server.get('/api/Project-Actions', (req, res) => {
    db('Project-Actions').select()
        .then(response => {
            res
                .status(200)
                .json(response);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({err: 'Failed to find Project-Actions.'});
        })
});

server.listen(Port, () => {
    console.log(`Server at Port ${Port} is up an running!`)
});