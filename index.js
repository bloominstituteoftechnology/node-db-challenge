/// ---- Node Dependencies ----
const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');

/// ---- Instantiate Server ----
const server = express();

/// ---- Instantiate Database ----
const db = knex(knexConfig.development);

/// ---- Connect Middleware to Server ----
server.use(helmet(), express.json());

///// ---------- CRUD Endpoints ----------

/// ---- CREATE New Project ----
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

    // Construct New Project Object
    const newProject = { name, description, complete };

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

        // Validation of Projects
        if ( Object.keys(project).length < 1 ) {
            return response.status(404).json({errorMessage:"We were unable to find any projects with the provided id."})
        }

        // Deconstruct Action + Promise Join
        const { project_id, project_name, project_description, project_completed } = project[0];

        // Empty Array of Actions as Default
        let actions = [];

        // Construct Array of Actions if Actions Exist
        if (project[0].id !== null) {
        actions = project.map(
             action => {
                 return { id: action.id, description: action.description, notes: action.notes, completed: action.complete }
                });
            }

        // Construct Project Object
        const projectAndActions = { id: project_id, name: project_name, description: project_description, completed: project_completed, actions:actions };
        response.status(200).json(projectAndActions);
        })
    .catch(error => response.status(500).json(error));
});

/// ---- CREATE New Action ----
server.post('/api/actions', (request, response) => {
    // Deconstruct Request Body
    let { description, notes, complete, project_id } = request.body;

    // Validation
    if ( !description || description.length < 5 || !project_id || project_id < 1 ) {
        return response.status(400).json({ errorMessage: "Please provide a description and project_id when creating an action. Description must be at least five characters long." })
    }

    if ( !notes ) {
        notes = "";
    }

    if ( complete !== true ) {
        complete = false;
    }

    // Construct New Project Object
    const newAction = { project_id, description, notes, complete };

    // Database Promise Methods
    db.insert(newAction)
    .into('action')
    .then( created => {
        if ( !created || created.length < 1 ) {
            return response.status(400).json({ errorMessage: "We were unable to create an action with the specified information." })
        }
        response.status(201).json(created[0]);
    })
    .catch( error => response.status(500).json(error) );
});

const port = "4242";
server.listen(port, () => {console.log(`#####- Projects Server Active on Port: ${port} -#####`)});