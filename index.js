const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());


server.get('/', (req, res) => {
  res.send('Test');
});

server.post('/api/projects', (req, res) => {
    const project = req.body;
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ errorMessage: 'Project name required' });
        return;
    }

    db.insert(project)
      .into('projects')
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => res.status(500).json(err));
});
  
server.get('/api/projects', (req, res) => {
    db('projects')
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => res.status(500).json(err));
});

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
  
    db('projects')
      .where('id', '=', id)
      .then(project => {
          if (!project) {
              res.status(404).json({ message: 'Project ID does not exist.' });
              return;
          }
          res.status(200).json(project);
      })
      .catch(err => {
          console.error('error', err);
          res.status(500).json({ error: 'Project content not available.'})
    })
});


server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
  
    db('projects')
      .where({ id }) 
      .del()
      .then(count => {
        res.status(200).json(count);
      })
      .catch(err => {
        res.status(500).json(err);
      });
});
  

server.put('/api/projects/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    db('projects')
        .where('id', '=', id) 
        .update(changes)
        .then(count => {
        res.status(200).json(count);
        })
        .catch(err => {
        res.status(500).json(err);
        });
});


const port = 2000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});