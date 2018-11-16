const express = require('express');
const server = express();

server.use(express.json());

const projectDb = require('./data/helpers/projectModel');
const actionDb = require('./data/helpers/actionModel');

//PROJECTS
server.get('/api/projects', (_, res) => {
  projectDb.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: '500 error fetching', err });
    })
});
 server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
   projectDb.getWithActions(id)
    .then(action => {
      projectDb.get(id)
        .then(project => {
          project.actions = action;
          res.status(200).json(project);
        })
        .catch(_ => {
          res.status(404).json({ message: '404 project not found', err });
        });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error fetching', err });
    });
});
 server.post('/api/projects', (req, res) => {
  const { name, description } = req.body;
   projectDb.insert({ name, description })
    .then(id => {
      res.status(201).json({ message: `ID ${id} created` });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error creating', err });
    })
});

//ACTIONS
server.get('/api/actions', (_, res) => {
  actionDb.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: '500 error fetching', err });
    })
});
 server.post('/api/actions', (req, res) => {
  const { description, notes, project_id } = req.body;
   actionDb.insert({ description, notes, project_id })
    .then(id => {
      res.status(201).json({ message: `ID ${id} created` });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error creating', err })
    })
});


const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});