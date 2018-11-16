const express = require('express');
const knex = require('knex');


const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const nameCheck = require('../middleware/nameCheck.js')


const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ api: 'Welcome to Getting Things Done: Projects & Actions' });
});


// TABLE SCHEMA
// PROJECT: one to many -- 1 Project to Many Actions
// unique id, PK, AI integer
// name text
// description text
// complete: integer 0 or 1. boolean (a flag that indicates if the project is complete or not.)

// Action one to one -- 1 Action to 1 Project

// unique id. PK AI
// description of what needs to be done. text
// notes column to add additional information. text
// complete: integer 0 or 1. boolean (a flag that indicates if the action has been completed).

server.get('/api/projects', (req, res) => {
  db('projects')
      //.select()
      .then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json({
        err
      }));
  });



module.exports = server;