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

/// ---- READ Project By Id ----
server.get('/api/projects/:id', (request, response) => {
    
    // Extract URL Parameter
    const { id } = request.params;

    if (!id || id < 1) {
        return response.status(400).json({errorMessage: "Invalid project id. Please provide a valid project id."})
    }

    // Database Promise Methods
    db('project as p')
    .leftJoin('action as a', 
    'a.project_id', 
    'p.id')
    .select('p.id as project_id', 
    'p.name as project_name', 
    'p.description as project_description', 
    'p.complete as project_complete', 
    'a.id', 
    'a.description', 
    'a.notes', 
    'a.complete')
    .where('p.id', id)
    .then(project => { 
