const express = require('express');
const db = require('./data/helpers/projectsDb');

const server = express();

server.use(express.json());

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  db
    .getProject(id)
    .then(response => {
      const project = { ...response };
      db
        .getActions(id)
        .then(response => {
          res
            .status(200)
            .json({ ...project, actions: response })
            .end()
        })
        .catch(err => {
          res
            .status(500)
            .json(err)
            .end()
        })
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
        .end()
    })
})

server.listen(8000, () => console.log('API running on Port 8000'));