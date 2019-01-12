const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const helper = require('./helpers');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.post('/projects', (req, res) => {
  const project = req.body;

  db.insert(project)
    .into('projects')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post('/actions', (req, res) => {
  const project = req.body;

  db.insert(project)
    .into('actions')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
server.get('/projects', (req, res) => {
  helper.getProjects()
      .then(projects => {
          res
              .json(projects);
      })
      .catch(err => {
          res
              .status(500)
              .json({message: 'Projects could not be retrieved at this time.'})
      });
});

server.get('/project/:id', (req, res) => {
  const { id } = req.params;
  db('projects').where('id', id)
  .then(response => {
    res
        .status(200)
        .json(response);
})
.catch(error => {
    console.log(error);
    res
        .status(500)
        .json({message: 'Failed to find project with this id.'});
})
});




server.listen(8000, () => console.log('Running on port 8000'));