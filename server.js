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


server.get('/api/projects/:id', (req, res) => {
        const id = req.params.id;

        if(isNaN(id)){
        res.status(404).json({ error: "Entered Id should be a number"});
        }

        else{
        
	db('projects')
	.where('id', id)	

        .then(response => {
        if(response.length==0) res.status(404).json({ error: "The project with the specified ID does not exist." });
         else {
                 res.status(200).json(response);
         }

        })

        .catch(err => {
        res.status(404).json({error: "The project with the specified ID does not exist."});
        })

        }
});


server.get('/api/actions/:id', (req, res) => {
        const id = req.params.id;

        if(isNaN(id)){
        res.status(404).json({ error: "Entered Id should be a number"});
        }

        else{
        
        db('actions')
        .where('id', id)
        
        .then(response => {
        if(response.length==0) res.status(404).json({ error: "The action with the specified ID does not exist." });
         else {
                 res.status(200).json(response);
         }

        })

        .catch(err => {
        res.status(404).json({error: "The action with the specified ID does not exist."});
        })

        }
});








server.use((req, res) => {
  res.status(404).send("Wrong path. Please provide a correct url");
});


server.listen(4001, ()=> console.log('API listening on port 4001'));
