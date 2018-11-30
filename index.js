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

//POST Action
server.post('/api/actions', (req, res) => {
    const actions_table = req.body;
    db('actions_table')
      .insert(action)
      //.returning('id')
      .then(ids => {
        res.status(201).json(ids);
      })
  
      .catch(err => {
        res.status(500).json({ message: 'Error inserting', err });
      });
  });


const port = 8888;
server.listen(port, () => {console.log(`\n#### Server running on port ${port} ####\n`)})


