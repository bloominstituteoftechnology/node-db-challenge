const knex = require('knex');
const knexConfig = require('./knexfile.js')

const db = knex(knexConfig.development)

const express = require('express');

//const db = require('./data/data-access.js');
const server = express();

server.use(express.json());

//GET..
server.get('/', (request, response) => {
    response.send('ACTIVE...');

})

//GET../projects
server.get('/projects', (request, response) => {
db('projects')
    .then(projects => response.status(200).send(projects))
    .catch(error => response.status(500).json(error));
})

//GET../projects/:id
server.get('/projects/:id', (request, response) => {
    db('projects')
        .where('id', '=', request.params.id)
        .then(project => response.status(200).send(project))
        .catch(error => response.status(500).json(error));
    })
    

//GET   ACTIONS
server.get('/actions', (request, response) => {
    db('actions')
          .then(actions => {
                response.status(200).json(actions); 
           })
          .catch(error => {
                response.status(500).json({error : 'The actions data could not be retrieved'})
           }) 
})

/*****  PROJECTS and ACTIONS  POST *****/
server.post('/projects', (request, response) => {
    const {name, description, completed} = request.body;
    if(name && !description) {
        console.log(request.body);
    db('projects')
          .insert(request.body)
          .then(projectId => {
                response.status(201).json(projectId);
           })
          .catch(error => {
                response.status(500).json({message : 'error creating project', error});
           }) 
    } else {
        response.status(400).json({ errorMessage: "Please provide name and description for the project." })
    }
}) 


//ACTIONS POST...
server.post('/actions', (request, response) => {
    const {project_id, description, notes, completed} = request.body;
    if(project_id !== undefined && notes !== undefined && description !== undefined && completed !== undefined) {
    db('actions').insert(request.body)
          .then(actionId => {
                response.status(201).json(actionId);
           })
          .catch(error => {
                response.status(500).json({message : 'error creating action', error});
           }) 
    } else {
        response.status(400).json({ errorMessage: "Please provide notes and description for the action." })
    }
}) 


//getProjectActions---
server.get('/projects/:id/actions', (request, response) =>{
    db('actions')
      .join('projects', 'projects.id','=', 'actions.project_id')
     /* select * from actions
        JOIN projects ON actions.project_id = projects.id; */   
        .then(actions => {
               if(actions.length < 1) {
                    response.status(404).json(`no action found for project  : ${request.params.description}`)
                }
                    response.status(200).json(actions);
         })
        .catch(error => response.status(500).json(error));
})

const port = 3300;
server.listen(port, function() {
console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

