const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const server = express();

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.send('Your API is running.');
});

// Projects Routes
server.get('/projects', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err =>
      res.status(500).json({ errorMsg: 'Could not get projects.' })
    );
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where('id', '=', id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res
        .status(500)
        .json({ errorMsg: 'Unable to get the project with that id.' })
    );
});

server.post('/projects', (req, res) => {
  const project = req.body;

  if (!project) {
    res
      .status(400)
      .json({
        errorMsg: 'Please fill in the required information for your project.'
      });
  }
  db.insert(project)
    .into('projects')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err =>
      res.status(500).json({ errorMsg: 'Could not add project to projects.' })
    );
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;

  db('projects')
  .where('id', '=', id)
  .update(project)
  .then(count => {
      res.status(200).json(count);
  })
  .catch(err => res.status(500).json({ errorMsg: 'Unable to edit project with that id.' }))
});

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    db('projects')
    .where('id', '=', id)
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => res.status(500).json({ errorMsg: 'Unable to delete project with that id.'}))
})

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
