const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');

const server = express();

const db = knex(knexConfig.development);

server.use(helmet(), express.json());

/// ---- CREATE New Project ----
server.post('/api/projects', (request, response) => {
    // Deconstruct Request Body
    server.post('/api/projects', (request, response) => {
        // Deconstruct Request Body
        let { name, description, complete } = request.body;
    
        // Validation
        if ( !name || name.length < 5 ) {
            return response.status(400).json({ errorMessage: "Please provide a name when creating a project. Name must be at least five characters long." })
        }
    
        if ( !description ) {
            description = "";
        }
    
        if ( !complete ) {
            complete = false;
        }
        
        // Database Promise Methods
    db.insert(newProject)
    .into('project')
    .then( created => {
        if ( !created || created.length < 1 ) {
            return response.status(400).json({errorMessage: "We were unable to create a project with the specified information."})
        }
        response.status(201).json(created[0]);
    })
    .catch( error => response.status(500).json(error) );
});