const knex = require('knex');
const knexConfig = require('./knexfile.js')

const db = knex(knexConfig.development)

const express = require('express');
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
    if(name || description) {
        console.log(request.body);
    db('projects')
          .insert({name, description, completed})
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
server.get('/projects/:id/actions', (request, response) => {
    const id = request.params.id;
    console.log(id);
        db('projects')
            .where("projects.id", id)
            .then(projectsArray => {
                if (projectsArray.length === 0) {
                    response.status(404).json({ error: "The project with the specified ID was not found." });
                } else {
                    const result = {         //construct new object 
                        ...projectsArray[0], //with project info return after promise.. 
                        actions: []          //and assign actions array empty for actions table info.
                    };
                    
                    db('actions')
                        .where("actions.project_id", id)
                        .then(actionsList => {
                            result.actions = actionsList;
                            response.status(200).json(result);
                        })
                        .catch(error => {
                            response.status(500).json({message: "Could not retrieve actions corresponding to project id.", error});
                        });
                }
            })
            .catch(error => {
                response.status(500).json({ message: "Could not retrieve project with the specified ID.", error });
            });
    });

/*****  PROJECTS and ACTIONS DELETE *****/
server.delete('/projects/:id', (request, response) => {
    db('projects')
               .where('id','=', request.params.id)
               .del()
               .then(count => { response.status(200).json(count) })
               .catch(error => {
                    response.status(500).json({message : 'error deleting user'})
                })
})

server.delete('/actions/:id', (request, response) => {
    db('actions')
               .where('id','=', request.params.id)
               .del()
               .then(count => { response.status(200).json(count) })
               .catch(error => {
                    response.status(500).json({message : 'error deleting user'})
                })
})

/*****  PROJECTS and ACTIONS UPDATE *****/
server.put('/projects/:id', (request, response) => {
    const {notes, description, completed} = request.body;
        db('projects')
              .where('id', '=', request.params.id)
              .update(request.body)
              .then(count => {
                  if(count) {
                        response.status(200).json(count);
                  } else {
                        response.status(404).json({ message: "The project with the specified ID does not exist." })
                  }
               })
              .catch(error => {
                   response.status(500).json({ error: "The project information could not be modified." })
               })
})

server.put('/actions/:id', (request, response) => {
    const {notes, description, completed} = request.body;
        db('actions')
              .where('id', '=', request.params.id)
              .update(request.body)
              .then(count => {
                  if(count) {
                        response.status(200).json(count);
                  } else {
                        response.status(404).json({ message: "The project with the specified ID does not exist." })
                  }
               })
              .catch(error => {
                   response.status(500).json({ error: "The project information could not be modified." })
               })
})

const port = 3300;
server.listen(port, function() {
console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

