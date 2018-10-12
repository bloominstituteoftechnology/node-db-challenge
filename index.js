// Import node modules
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

const convertToBoolean = (...data) => {
  return function(object) {
    return data.reduce((container, item) => ({...container, [item]: !!container[item] }), object);
    };
}; // convert to a boolean by currying using reduce

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

// Add GET ROUTE HANDLER to get a project by id

server.get('/api/projects/:id', (req, res) => {
  const project = db('projects')
    .where('id', req.params.id)
    .first();
  
  const actions = db('actions').where('project_id', req.params.id);

  Promise.all([project, actions])
    .then(([project, actions]) => {
      if (!project) 
        return res.status(404).json({ message: "Project was not found"});
      let result = convertToBoolean('completed')(project);
      result.actions = actions.map(action => convertToBoolean('completed')(action), 'project_id');
      
      res.status(200).json(result);
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

// ========================ACTIONS ENDPOINTS=========================

// Add GET ROUTE HANDLER to access the actions
server.get('/api/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

//Add POST ROUTE HANDLER to add a action
server.post('/api/actions', (req, res) => {
  if(!req.body.project_id || !req.body.description || !req.body.notes) {
    return res.status(400).send({ errorMessage: "Please provide a project_id, description, and notes for this action." });
   } 
  
  if(req.body.description.length > 128) {
    return res.status(400).send({error: " Action description must be less than 128 characters"});
  }

  // When both tests pass, submit request
  const { project_id, description, notes } = req.body;
  const newAction = { project_id, description, notes };
  // const project = req.body;

  db.insert(newAction)
    .into('actions')
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Name port
const port = 2000;

// Call server.listen w/ a port of 2000
server.listen(port, () =>
  console.log(`\n=== API running on port ${port} ===\n`)
);