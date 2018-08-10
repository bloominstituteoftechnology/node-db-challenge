const express = require('express');

const db = require('./data/db');

const server = express();
server.use(express.json())

const PORT = 8000;

//==========Projects==========

server.post('/projects', (req, res) => {
  const project = req.body;
  db.insert(project).into('projects')
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

server.get('/projects', (req, res) => {
  db('projects')
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.get('/projects/:id', (req, res) => {
  const id = req.params.id;
  db('projects').where('id', id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.get('/projects/:id/actions', (req, res) => {
  const id = req.params.id;
  db('actions').where('userId', id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.put('projects/:id', (req, res) => {
  const id = req.params.id;
  const project = req.body
  db('projects').where('id', id).update(project)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete('projects/:id', (req, res) => {
  const id = req.params.id;
  db('projects').where('id', id).del()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//=========Actions==========

server.post('actions', (req, res) => {
  const action = req.body;
  db.insert(action).into('actions')
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.get('actions', (req, res) => {
  db('actions')
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen(PORT, () => {
  console.log(`Up and running on ${PORT}`)
})
