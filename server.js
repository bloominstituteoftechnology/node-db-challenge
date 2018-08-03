const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const db = require('./data/db');

const server= express();

server.use(express.json());

server.use(morgan('dev'));

server.get('/', (req, res) => {
	res.send('Testing....');

});



server.get('/api/projects', (req, res)=>{

        db('projects')
        .then(response => {
                res.status(200).json(response);
        })

        .catch(err => res.status(500).json({errorMessage: "There was an error while retrieving projects from the database"}));

});


server.get('/api/actions', (req, res)=>{

        db('actions')
        .then(response => {
                res.status(200).json(response);
        })

        .catch(err => res.status(500).json({errorMessage: "There was an error while retrieving actions from the database"}));

});





server.use((req, res) => {
  res.status(404).send("Wrong path. Please provide a correct url");
});


server.listen(4001, ()=> console.log('API listening on port 4001'));
