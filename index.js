// depends
const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');

const server = express(); //server

const db = knex(knexConfig.development); //db

server.use(helmet(), express.json()); //midware

// not enough error messages to bother writing variables

server.post('/api/projects', (request, response) => {
    let { name, description, complete } = request.body; // decon
    if ( !name || name.length < 4 ) {
        return response.status(400).json({ errorMessage: "Project name must be at least 4 characters." })
    }
    if ( !description ) {
        description = "";
    }
    if ( !complete ) {
        complete = false;
    }

    const newProject = { name, description, complete }; // construct obj

    db.insert(newProject) // db prom
    .into('project')
    .then( created => {
        if ( !created || created.length < 1 ) {
            return response.status(400).json({errorMessage: "Project not created"})
        }
        response.status(201).json(created[0]);
    })
    .catch( error => response.status(500).json(error) );
});

// READ proj ID
server.get('/api/projects/:id', (request, response) => {

    const { id } = request.params;

    if (!id || id < 1) {
        return response.status(400).json({errorMessage: "Project Id invalid"})
    }

    // promises
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

        if ( Object.keys(project).length < 1 ) { //validate
            return response.status(404).json({errorMessage:"We were unable to find any projects "})
        }

        const { project_id, project_name, project_description, project_completed } = project[0]; //decon ac + pro

        let actions = []; //def action

        if (project[0].id !== null) { //constru act
        actions = project.map(
             action => {
                 return { id: action.id, description: action.description, notes: action.notes, complete: action.complete }
                });
            }

        const projectAndActions = { id: project_id, name: project_name, description: project_description, completed: project_completed, actions:actions }; //proj obj
        response.status(200).json(projectAndActions);
        })
    .catch(error => response.status(500).json(error));
});

// CREATE action
server.post('/api/actions', (request, response) => {

    let { description, notes, complete, project_id } = request.body;

    if ( !description || description.length < 4 || !project_id || project_id < 1 ) {
        return response.status(400).json({ errorMessage: "Must provide id and descript at least 4 characters long." })
    }
    if ( !notes ) {
        notes = "";
    }
    if ( complete !== true ) {
        complete = false;
    }

     //New Project Object
    const newAction = { project_id, description, notes, complete }; //new prom obj

    db.insert(newAction)
    .into('action')
    .then( created => {
        if ( !created || created.length < 1 ) {
            return response.status(400).json({ errorMessage: "Create failed" })
        }
        response.status(201).json(created[0]);
    })
    .catch( error => response.status(500).json(error) );
});

const port = "8000";
server.listen(port, () => {console.log(`=*= Sprint Challenge Rolling on Port ${port}- =*=`)});
