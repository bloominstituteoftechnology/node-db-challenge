const express = require('express');
const helmet = require('helmet');

const db = require('./db/helpers/helper');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API running....')
});

server.get('/projects', (req, res) => {
    db.getProjects()
      .then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json(err))
  });

server.get('/projects/:id', (req, res) => {
    const { id } = req.params
    db.getProject(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error)
    })
});




server.listen(5000);