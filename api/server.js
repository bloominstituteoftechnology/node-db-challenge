const express = require('express');
const knex = require('knex');


const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const nameCheck = require('../middleware/nameCheck.js')
const descriptionCheck = require('../middleware/descriptionCheck');


const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ api: "Welcome to Getting Things Done: Projects & Actions" });
});


// TABLE SCHEMA
// PROJECT: one to many -- 1 Project to Many Actions
// unique id, PK, AI integer
// name text
// description text
// complete: integer 0 or 1. boolean (a flag that indicates if the project is complete or not.)

// ACTION one to one -- 1 Action to 1 Project
// unique id. PK AI
// description of what needs to be done. text
// notes column to add additional information. text
// complete: integer 0 or 1. boolean (a flag that indicates if the action has been completed).
// project_id integer referencing id in project



// ENDPOINTS

// ENDPOINTS: PROJECTS


// PROJECTS: POST
server.post('/api/projects', nameCheck, (req, res) => {
  const { name, details, finished } = req.body;
  
  const project = { name, details, finished };

  db('projects')
    .insert(project)
    .then(ids => {; 
      res.status(200).json( { id: ids[0] } );//201 or 200
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err })
    })
})

// PROJECTS: GET
server.get('/api/projects', (req, res) => {

  db('projects')
      //.select()
      .then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json({ err }));
  });

  // PROJECTS: GET BY ID WITH ACTION
server.get('/api/projects/:id', async (req, res) => {
  const { id } = req.params;

  const project = await db('projects')
    .where({ id: id })
    .catch(err => res.status(500).json({
      err
    }));

  const actions = await db('actions')
    .where({ project_id: id })
    .catch(err => res.status(500).json({
      err
    }));

    return res.status(200).json( { project: project[0], actions: actions } ) 

});

server.put('/api/projects/:id', (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db('projects')
    .where({ id: id }) // 
    .update(changes)
    .then(count => {
      res.status(200).json({
        id: changes.id,
        name: changes.name,
        details: changes.details,
        finished: changes.finished,
      });
    })
    .catch(err => res.status(500).json(err));
});

server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where({
      id: id
    })
    .del()
    .then(count => {
      res.status(200).json({
        count
      });
    })
    .catch(err => res.status(500).json(err));
});

// ACTIONS

// ACTIONS: POST

server.post('/api/actions', descriptionCheck, (req, res) => {
  const { description, notes, complete, project_id } = req.body;
  // console.log(description, notes, complete, project_id)
  const action = { description, notes, complete, project_id };
  // console.log(description, action)
  // const { action } = req.body

  db('actions')
    .insert(action)
    .then(ids => { 
      // res.status(200).json( { id: ids[0] } );//201 or 200
    res.status(200).json( { id: ids[0] } );//201 or 200

    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err })
    })
})


// ACTIONS: GET

server.get('/api/actions', (req, res) => {

  db('actions')
      //.select()
      .then(actions => res.status(200).send(actions))
      .catch(err => res.status(500).json({ err }));
  });

// ACTIONS: GET BY ID

server.get('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  db('actions')
    .where({ id: id })
    .then(actions =>
      actions[0] ?
      res.status(200).json(actions[0]) :
      res.status(404).json({
        error: "there is no action with that id",
        "log": console.log(id)
      }))
    .catch(err => res.status(500).json({
      err
    }));
});

// ACTIONS: PUT

server.put('/api/actions/:id', (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db('actions')
    .where({ id: id }) // 
    .update(changes)
    .then(count => {
      res.status(200).json({
        id: changes.id,
        description: changes.description,
        notes: changes.notes,
        complete: changes.complete,
        project_id: changes.project_id
      });
    })
    .catch(err => res.status(500).json(err));
});

server.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where({
      id: id
    })
    .del()
    .then(count => {
      res.status(200).json({
        count
      });
    })
    .catch(err => res.status(500).json(err));
});


module.exports = server;