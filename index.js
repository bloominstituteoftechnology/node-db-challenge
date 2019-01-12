const express = require('express');
const server = express();
const db = require('./dbConfig');

server.use(express.json());

const PORT = 4040;

server.post('/projects', (req, res) => {
  const project = req.body;
  !project
    ? res
        .status(401)
        .json({ error: 'Check the sumbitted information and try again' })
    : db('projects')
        .insert(project)
        .then(ids => res.status(201).json(ids[0]))
        .catch(err => res.status(500).json({ err }));
});

server.post('/actions', (req, res) => {
  const action = req.body;
  !action
    ? res
        .status(401)
        .json({ error: 'Check the submitted information and try again.' })
    : db('actions')
        .insert(action)
        .then(ids => res.status(201).json(ids[0]))
        .catch(err => res.status(500).json({ err }));
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where('id', id)
    .then(result =>
      !result
        ? res
            .status(404)
            .json({ error: 'There is no project with the specified ID' })
        : db('actions')
            .where('project_id', id)
            .then(actions => {
              result[0].actions = actions;
              res.status(200).json(result[0]);
            })
    )
    .catch(err => res.status(500).json({ err }));
});

server.listen(PORT, () =>
  console.log(`Server is up and running in port: ${PORT}`)
);
