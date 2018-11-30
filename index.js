const express = require('express');
const knex = require('knex');

const server = express();
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.use(express.json());


server.get('/api/projects', (req, res) => {
  db('project')
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

server.get('/api/actions', (req, res) => {
  db('action')
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db('project')
    .where({ id })
    .then(project => {
      db('action')
        .where({ project_id: id })
        .then(action => {
          console.log(action);
          return res.status(200).json({...project,actions:action})
        })
        .catch(() => {
          return res.status(500).json({ Error: 'Cannot find that project info'})
        })
    })
})

server.post('/api/projects', (req, res) => {
  const change = req.body;
  db('project')
    .insert(change)
    .then(ids => {
      res.status(201).json(ids)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

server.post('/api/actions', (req, res) => {
  const change = req.body;
  db('action')
    .insert(change)
    .then(ids => {
      res.status(201).json(ids)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db('project')
  .where({ id: id })
  .del()
  .then(count => {
    res.status(200).json({ count });
  })
  .catch(err => res.status(500).json(err));
})


const port = 3300;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));