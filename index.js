const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/projects', (req, res) => {
  db('projects')
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.post('/projects', (req, res) => {
  const project = req.body;
  db('projects')
    .insert(project)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;
  db('projects')
    .where({ id })
    .update(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => res.status(500).json(err));
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .del()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(500).json(err));
});

server.get('/actions', (req, res) => {
  db('actions')
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get('/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get('/projects/:id/actions', (req, res) => {
  const { id } = req.params;
  db('projects as p')
    .join('actions as a', 'p.id', 'a.projectId')
    .select('p.name', 'a.description', 'a.notes', 'a.completed')
    .where('a.projectId', id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(500).json(err));
});

server.put('/actions/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;
  db('actions')
    .where({ id })
    .update(action)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => res.status(500).json(err));
});

server.delete('/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .del()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(500).json(err));
});

const port = 5000;
server.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
