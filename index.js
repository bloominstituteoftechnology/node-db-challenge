// Import node modules
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();// creates the server

// Add GLOBAL MIDDLEWARE
server.use(express.json());// formatting our req.body obj
server.use(logger ('combined'));// combined or tiny
server.use(helmet());

//ROUTES

//Add home route
server.get('/', (req, res) => {
  res.send('<h1>Here we go!</h1>');
});

// ========================PROJECTS ENDPOINTS=========================

// Add GET ROUTE HANDLER to access the projects
server.get('/api/projects', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

//Add POST ROUTE HANDLER to add a project
server.post('/api/projects', (req, res) => {
  if(!req.body.name || !req.body.description) {
        return res.status(400).send({ errorMessage: "Please provide name and a description for this project." });
        }
      else if(req.body.name.length > 128 && req.body.description ) {
        return res.status(400).send({error: " User name must be less than 128 characters"})
      }
  const project = req.body;

  db.insert(project)
    .into('projects')
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});




// server.post('/api/projects', (req, res) => {
//   // Check that name and description is present. If not return error message.
//   if(!req.body.name || !req.body.description) {
//     return res.status(400).send({ errorMessage: "Please provide name and a description for this project." });
//     }
//   else if(req.body.name.length > 128 && req.body.description ) {
//     return res.status(400).send({error: " User name must be less than 128 characters"})
//   }
//   const { name, description } = req.body;
//   const newProject = { name, description };
//   db
//     .insert(newProject)
//     .then(newProject => {
//         console.log(newProject);
//         res.status(201).json(newProject);
//       })
//     .catch(err => res.status(500).send({ error: "There was an error while saving a project to the database" }));

//   });

// Name port
const port = 2000;

// Call server.listen w/ a port of 2000
server.listen(port, () =>
  console.log(`\n=== API running on port ${port} ===\n`)
);