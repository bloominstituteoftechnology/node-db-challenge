const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');
 
 
const server = express();

//Initialize db
const db = knex(knexConfig.development);

//Connect Middleware to Server 
server.use(helmet(), express.json());

// SANITY CHECK
server.get('/', (request, response) => {
    response.send("Let's get it!")
});

 // POST Project

server.post('/api/project', (req, res) => {
  const projects_table = req.body;
  db('projects_table')
    .insert(project)
    .then(ids => {
      res.status(201).json(ids);
    })
     .catch(err => {
      res.status(500).json({ message: 'Error with insert', err });
    });
});

// POST Action
server.post('/api/actions', (req, res) => {
    const actions_table = req.body;
    db('actions_table')
      .insert(action)
      .then(ids => {
        res.status(201).json(ids);
      })
  
      .catch(err => {
        res.status(500).json({ message: 'Error inserting', err });
      });
  });

// GET Projects 

server.get('/api/projects', (req, res) => {
    db('projects_table')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects_table')
    .where({ id })
    .then(project => { 
    if (!project ) { 
    res.status(404).json({ message: "The project with provided ID is not available." });
    return  
    } else if (!project.length) { 
    res.status(404).json({ message: "The project with provided ID does not contain any actions." });
    return  
    } else if (project && project.length){ 
    res.status(200).json(cohort);
    return  
    }
    })
    .catch(err => {
    res 
        .status(500)
        .json({ error: "Not available." });
    });
});


const port = 8888;
server.listen(port, () => {console.log(`\n#### Server running on port ${port} ####\n`)})


