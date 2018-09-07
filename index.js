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
        //   console.log(project.length);
          if (project.length === 0) {
              res.status(401).json({ message: 'The project with the specified ID does not exist.' });
              return;
          }

          db('actions')
            .where('project_id', '=', id)
            .then(actions => {
                project[0].actions = actions;
                res.status(200).json(project);
            })
        //   res.status(200).json(project);
            .catch(err => {
                console.error('error', err);
                res.status(500).json({ error: 'The project information could not be retrieved.'});
            })
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


// action endpoints -----------------------------------------
// add an action
server.post('/api/actions', (req, res) => {
    const action = req.body;
    const { description } = req.body;
    if (!description) {
        res.status(400).json({ errorMessage: 'The action description is required, please enter the name and try again.' });
        return;
    }
  
    db.insert(action)
      .into('actions')
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => res.status(500).json(err));
});

// get all actions
server.get('/api/actions', (req, res) => {
    db('actions')
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => res.status(500).json(err));
});

// get a specific action
server.get('/api/actions/:id', (req, res) => {
    const { id } = req.params;
  
    db('actions')
      .where('id', '=', id)
      .then(action => {
          if (!action) {
              res.status(404).json({ message: 'The action with the specified ID does not exist.' });
              return;
          }
          res.status(200).json(action);
      })
      .catch(err => {
          console.error('error', err);
          res.status(500).json({ error: 'The action information could not be retrieved.'})
    })
});

// update an action's info
server.put('/api/actions/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    db('actions')
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

// delete an action
server.delete('/api/actions/:id', (req, res) => {
    const { id } = req.params;
  
    db('actions')
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



const port = 3100;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});