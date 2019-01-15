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
    .then(project => {
      if(project) {
        db('actions').where('project_id', id)
          .then(actions => {
            project[0].actions = actions;
            res.status(200).json(project);
          })
          .catch(err => {
            res.status(500).json({ error: 'Project does not exist' })
          })
      } else {
        res.status(404).json({ error: 'Failed to find project' })
      }
    })

 })




server.listen(8000, () => console.log('Running on port 8000'));