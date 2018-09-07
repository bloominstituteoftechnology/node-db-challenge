const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.get('/', (req, res) => {
  res.send('API Running?');
});

// project endpoints -----------------------------------------
// add a project
server.post('/api/projects', (req, res) => {
    const project = req.body;
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ errorMessage: 'The project name is required, please enter the name and try again.' });
        return;
    }

    db.insert(project)
      .into('projects')
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => res.status(500).json(err));
});
  
// get all the projects
server.get('/api/projects', (req, res) => {
    db('projects')
      // .select('name')
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => res.status(500).json(err));
});

// get a specific project
server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
  
    db('projects')
      .where('id', '=', id)
      .then(project => {
          // console.log(project);
          if (!project) {
              res.status(404).json({ message: 'The project with the specified ID does not exist.' });
              return;
          }
          res.status(200).json(project);
      })
      .catch(err => {
          console.error('error', err);
          res.status(500).json({ error: 'The project information could not be retrieved.'})
    })
});

// delete a project
server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
  
    db('projects')
      .where({ id }) // or .where(id, '=', id)
      .del()
      .then(count => {
        // count === number of records deleted
        res.status(200).json(count);
      })
      .catch(err => {
        res.status(500).json(err);
      });
});
  
  // update a project's name
server.put('/api/projects/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    db('projects')
        .where('id', '=', id) // or .where({ id: id })
        .update(changes)
        .then(count => {
        // count === number of records updated
        res.status(200).json(count);
        })
        .catch(err => {
        res.status(500).json(err);
        });
});


const port = 3100;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});