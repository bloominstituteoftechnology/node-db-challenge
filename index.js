const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const db = require('./data/dbHelpers.js');

const server = express();

server.use(helmet());
server.use(express.json());

//GET ALL Projects

server.get('/api/projects', (req, res) => {
  db.getProjects()
  .then(project =>{
    res.status(200).json(project);
  })
    .catch(err => res.status(500).json(err));
  });

//POST for adding projects

server.post('/api/project', async (req, res) => {
  db.addProject(req.body)
      .then(project => {
        res.status(201).json(project);
      })
  .catch(err => res.status(500).json(err));
});

//GET ALL Actions

server.get('/api/actions', (req, res) => {
  db.getActions()
  .then(action =>{
    res.status(200).json(action);
  })
    .catch(err => res.status(500).json(err));
  });

// POST for adding actions.

server.post('/api/action', async (req, res) => {
  db.addAction(req.body)
      .then(action => {
        res.status(201).json(action);
      })
  .catch(err => res.status(500).json(err));
});


server.get('/api/projects/:id', async (req, res) => {
  const id = req.params.id;
db.getProjectByIdWithActions(id)
  .then(project => {
    if (project) {
      res.status(200).json(project);
    }else{
      res.status(404).json({ message: 'project is not found' });
    }
    })
  .catch(err => console.log('error', err));
});



const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));