const express = require('express');
const helmet = require('helmet');

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();
const parser = express.json();

server.use(parser);
server.use(helmet());

const PORT = 3000;

//ENDPOINTS

server.post('/projects', (req, res) => {
    const project = req.body;

    db.insert(project)
    .into('projects')
    .then(response => {
        res.status(201).json(response);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: 'Could not insert project'
        });
    });
});

server.post('/actions', (req, res) => {
    const action = req.body;

    db.insert(action)
    .into('actions')
    .then(response => {
        res.status(201).json(response);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: 'Could not insert action'
        });
    });
});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;

    db('projects')
      .where({id})
      .then(response => {
          res.json(response)
      })
      .catch(err => {
          res.status(500).json({
              errorMessage: `Could not get project with id:${id}`
          });
      });
});

server.listen(PORT, function(){
    console.log(`\n API Listening on http://localhost:${PORT}\n`);
});