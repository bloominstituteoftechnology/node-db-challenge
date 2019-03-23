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

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));