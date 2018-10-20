const express = require('express');
const helmet = require('helmet');

const projectsRoutes = require('./projects/projectsRoutes');

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.get('/', (req, res) => {
  res.send('It is working!');
});


// read all actions
server.get('/api/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// read actions by id
server.get('/api/actions/:id', (req, res) => {
  const id = req.params.id;
  db('actions').where({ id })
    .then(action => {
      if (action.id) {
        res.status(200).json(action[0]);
      } else {
        res.status(404).json('error');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// create actions
server.post('/api/actions', (req, res) => {
  const action = req.body;
  db.insert(action)
    .into('actions')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// update actions
server.put('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  const newAction = req.body;
  db('actions')
    .where({ id })
    .update(newAction)
    .then(action => {
      if (!action || action < 1) {
        res.status(404).json({ message: 'No records found to update' });
      } else {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// delete actions
server.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .del()
    .then(action => {
      if (!action || action < 1) {
        res.status(404).json({ message: 'No records found to delete' });
      } else {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

server.use('/api/projects', projectsRoutes);


// listening port
const port = 5000;
server.listen(port, function() {
  console.log(`\n=== API listening on port ${port} ===\n`);
});