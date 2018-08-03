const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('up and running...');
});


// !====== Projects

server.post('/projects', (req, res) => {
  const project = req.body;
  //console.log(project)
  db
    .insert(project)
    .into('projects')
    .then(ids => {
      const id = ids[0]
      res.status(201).json({ id, ...project})
    })
    .catch(err => res.status(500).json(err));
});

server.get('/projects', (req, res) => {
  db('projects')
    .then(project => {
      res.status(200).json(project);
    })
    .catch((err) => res.status(500).json(err));
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch((err) => res.status(500).json(err));
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .del()
    .then((id) => {
        res.json(id);
    })
    .catch(err => {
        res.json({ err });
    })
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;
  db('projects')
    .where({ id })
    .update(project)
    .then((project) => {
        res.json(project);
    })
    .catch(err => {
        res.json({ err });
    })
});

// !========= Actions

server.post('/actions', (req, res) => {
  const action = req.body;
  //console.log(project)
  db
    .insert(action)
    .into('actions')
    .then(ids => {
      const id = ids[0]
      res.status(201).json({ id, ...action})
    })
    .catch(err => res.status(500).json(err));
});

server.get('/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch((err) => res.status(500).json(err));
});

server.get('/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .then(action => {
      res.status(200).json(action);
    })
    .catch((err) => res.status(500).json(err));
});

server.delete('/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .del()
    .then((id) => {
        res.json(id);
    })
    .catch(err => {
        res.json({ err });
    })
});

server.put('/actions/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;
  db('actions')
    .where({ id })
    .update(action)
    .then((action) => {
        res.json(action);
    })
    .catch(err => {
        res.json({ err });
    })
});



const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on port ${port} ===\n`);
});