const express = require('express');
const server = express();
const db = require('./dbConfig');

server.use(express.json());

const PORT = 4040;

server.post('/projects', (req, res) => {
  const project = req.body;
  db('projects')
    .insert(project)
    .then(ids => res.status(201).json(ids[0]))
    .catch(err => res.status(500).json({ err }));
});

server.post('/actions', (req, res) => {
  const action = req.body;
  db('actions')
    .insert(action)
    .then(ids => res.status(201).json(ids[0]))
    .catch(err => res.status(500).json({ err }));
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  let project = {};
  db('projects')
    .where('id', id)
    .then(result => {
      db('actions')
        .where('project_id', id)
        .then(actions => {
          project = Object.assign({}, result[0]);
          project.actions = actions;
          console.log('actions', actions);
        });
      console.log(project);
      res.status(200).json(project);
      setTimeout(() => console.log('while after', project), 2000);
    })
    .catch(err => res.status(500).json({ err }));
});

server.listen(PORT, () =>
  console.log(`Server is up and running in port: ${PORT}`)
);
