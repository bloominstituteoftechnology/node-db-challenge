const express = require('express');
const helmet = require('helmet');
const knex= require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development); 

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's Alive!");
})

server.get('/projects', (req, res) => {
    db('projects')
    .then(project => {
      console.log(project)
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json(err)
    });
  });
  

server.get('/projects/:id', (req, res) => { 
  const { id } = req.params;
  db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        db('actions')
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          })
          .catch(err => res.json(err));
      } else {
        res.status(404).json({ message: 'not working' });
      }
    })
    .catch(err => res.json(err));
})


  server.post('/projects', (req, res) => {
    const name = req.body;
     db
     .insert(name) 
     .into('projects')
    .then(name => {
      res.status(200).json(name[0])
    })
    .catch(err => {
      res.status(500).json(err)
    });
  })

  server.put('/projects/:id', (req, res) => {
    const project = req.body;
    db('projects')
      .where({ id: req.params.id })
      .update(project)
      .then(project => {
        if (project) {
          res.status(200).json({ message: "Successfully Updated." });
        } else {
          res.status(404).json({ message: "No project associated with this ID" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Sorry, we could not update this project." });
      });
  });

  server.delete('/projects/:id', (req, res) => {
    db('projects')
      .where({ id: req.params.id })
      .del()
      .then(count => {
        if (count) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: "No project associated with this ID" });
        }
      })
      .catch(err => res.status(500).json(err));
  });


  server.get('/actions', (req, res) => {
    db('actions')
    .then(actions => {
      console.log(actions )
      res.status(200).json(actions)
    })
    .catch(err => {
      res.status(500).json(err)
    });
  });

  server.get('/actions/:id', (req, res) => {
    db('actions')
      .where({ id: req.params.id })
      .first()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => 
      res.status(500).json(err));
  });

  server.post('/actions', (req, res) => {
    const name = req.body;
     db
     .insert(name) 
     .into('actions')
    .then(name => {
      res.status(200).json(name[0])
    })
    .catch(err => {
      res.status(500).json(err)
    });
  })

  server.put('/actions/:id', (req, res) => {
    const action = req.body;
    db('actions')
      .where({ id: req.params.id })
      .update(action)
      .then(action => {
        if (action) {
          res.status(200).json({ message: "Successfully Updated." });
        } else {
          res.status(404).json({ message: "No action associated with this ID" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Sorry, we could not update this cohort." });
      });
  });

  server.delete('/actions/:id', (req, res) => {
    db('actions')
      .where({ id: req.params.id })
      .del()
      .then(count => {
        if (count) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: "No cohort associated with this ID" });
        }
      })
      .catch(err => res.status(500).json(err));
  });






server.listen(9000, () => console.log('\n Party at part 9k '))