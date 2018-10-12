const express = require('express');
const helmet = require('helmet');

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development)

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/projects', (req, res) => {
    db('projects')
    .select('*' )
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => res.status(500).json(err));
})

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
      db('projects')
      .select('projects.id', 'projects.name', 'projects.description','projects.completed')
      .where({id})   
      .then(projects => {
        if (projects) {
            db.select('*')
              .from('projects')
              .select('actions.id', 'actions.description', 'actions.notes', 'actions.completed' )
              .from('actions')
              .where('actions.project_id', '=', id)
              
              .then(actions => {
                  const query = {...projects[0], actions};
                res.status(200).json(query);
              })
          
      } else {
        res.status(404).json({ message: 'projects not found' });
      }
    } 
  )
  .catch(err => console.error(err));
  })

server.post('/api/projects', (req, res) => {
    const project = req.body;
  
    db.insert(project)
      .into('projects')
      .then(ids => {
        res.status(201).json(ids[0]);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  server.post('/api/actions', (req, res) => {
    const action = req.body;
  
    db.insert(action)
      .into('actions')
      .then(ids => {
        res.status(201).json(ids[0]);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

server.listen(5000, () => console.log('running on port 5000'));