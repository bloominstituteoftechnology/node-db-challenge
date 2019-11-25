const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config.js");

const server = express();

server.use(helmet());
server.us(expres.json());

// get projects
server.get("/api/projects", (request, response) => {
  // get all projects from the database
  db("projects as a ")
    // .leftJoin('projects as s ', 's.id', 'a.projects_id' ) change projects to sub title
    // .select('a.id', 'a.project_name', 'a.projeck_description', 'a.project_name') 
    // change project name at the end to the sub title
    .then(projects => {
      response.status(500).json(error);
    });
});

// create project 
server.post('/api/projects', (request, response) => {
    db('projects').insert(request.body)
    .then(ids => {
        const id = ids[0];

        db('projects')
        .where({ id })
        .first()
        .then(project => {
            response.status(201).json(project);
        });
    })
    .catch(error => {
        response.status(500).json(error);
    });
});


// remove project 
server.delete('/api/projects/:id', (request, response) => {
    db('projects')
    .where({ id: request.params.id })
    .del()
    .then(count => {
        if (count > 0) {
            response.status(204).end();
        } else {
            response.status(404).json({ message: 'Record not found' });
        }
    })
    .catch(error => {
        response.status(500).json(error);
    });
});

module.exports = server;

// a unique Id.
// - [ ] a name. This column is required.
// - [ ] a description.
// - [ ] a boolean that indicates if the project has been completed.
// This column cannot be NULL, the default value should be `false`.
