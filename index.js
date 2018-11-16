const express = require('express');
const server = express();
const port = 3300;

const projectDb = require('./data/helpers/projectModel');
const actionDb = require('./data/helpers/actionModel');

server.use(express.json());

// endpoints
// test
server.get('/', (_, res) => {
  res.status(200).json({ api: 'running' });
});

// ======================= api/projects =======================
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
          res.status(404).json({ message: '404 project not found' });
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

server.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  projectDb.update(id, { name, description })
    .then(count => {
      if (count) return res.status(200).json({ message: `${count} project updated` });
      res.status(404).json({ message: '404 project not found' });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error updating', err });
    })
});

server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  projectDb.remove(id)
    .then(count => {
      if (count) return res.status(200).json({ message: `${count} project deleted` });
      res.status(404).json({ message: '404 project not found' });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error deleting', err });
    });
})

// ======================= api/actions =======================
server.get('/api/actions', (_, res) => {
  actionDb.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: '500 error fetching', err });
    });
});

server.post('/api/actions', (req, res) => {
  const action = req.body;

  actionDb.insert(action)
    .then(id => {
      res.status(201).json({ message: `ID ${id} created` });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error creating', err })
    });
});

server.put('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;

  actionDb.update(id, action)
    .then(count => {
      if (count) return res.status(200).json({ message: `${count} action updated` });
      res.status(404).json({ message: '404 project not found' });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error updating', err })
    });
});

server.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;

  actionDb.remove(id)
    .then(count => {
      if (count) return res.status(200).json({ message: `${count} action deleted` });
      res.status(404).json({ message: '404 project not found' });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error updating', err })
    });
});

server.listen(port, () => console.log(`Listening to port: ${port}`));
