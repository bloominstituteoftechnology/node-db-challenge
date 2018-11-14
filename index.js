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



server.listen(9000, () => console.log('\n Party at part 9k '))