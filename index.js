const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db=knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.send('API Running');
});

//projects endpoints
server.get('/projects', (req, res) => {
    db('projects') 
     .then(projects => res.status(200).json(projects))
     .catch(err => res.status(500).json({ error: 'Projects cannot be retrieved'}));
  });


server.get('/projects/:id', (req, res) => {
 const { id } =  req.params.id;
    db('projects')
    .select()
     .where({ id })
     .then(projects => {
         if(project) {
             res.status(200).json(projects);
         } else {
             res.status(404).json({error: 'Cannot retrieve project with specified ID'});
         }
     })
     .catch(error => res.status(500).json({ error: 'Cannot retrieve project information'}));
  });

  server.post('/projects',(req, res) => {
    const { project } = req.body;
    if (!project) res.status(400).json({ error: 'Please provide a project' });
    db
      .insert({ project })
      .into('projects')
      .then(ids => res.status(201).json( ids))
      .catch(err => res.status(500).json({ error: 'Project cannot be saved' }));
  });
  
  server.put('/projects/:id', (req, res) => {
    const { id } = req.params.id;
    const { project } = req.body;

    db('projects')
      .where(id)
      .update( project )
      .then(project => res.status(200).json([project]))
      .catch(err => res.status(500).json({ error: 'Unable to update project' }));
  });
  
  
  server.delete('/projects/:id', (req, res) => {
    const { id } = req.params.id;
    db('projects')
      .where(id)
      .del()
      .then(count => {
        if (count) {
          res.status(200).json({message: 'Project succesfully deleted'})
        } else {
          res.status(404).json({ errMsg: `Project not found` });
        }
      })
      .catch(err => res.status(500).json({ error: 'Project could not be deleted' }));
  });






//actions endpoints
server.get('/actions', (req, res) => {
    db('actions')
     .then(actions => 
      res.status(200).json(actions))
     .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
  });

  server.get('/actions/:id', (req, res) => {
    const { id } =  req.params.id;
    db('actions') 
    .where(id)
     .then(actions => {
             res.status(200).json(actions)
     })
     .catch(error => res.status(500).json({ error: 'Unable to retrieve action'}));
  });

  server.post('/actions',(req, res) => {
    const { action} = req.body;
  
    if (!action) res.status(400).json({ error: 'Please provide an action' });
      db.insert({ action })
      .into('actions')
      .then(ids => res.status(201).json( ids ))
      .catch(err => res.status(500).json({ error: 'Action not saved' }));
  });

  server.put('/actions/:id', (req, res) => {
    const { id } = req.params.id;
    const { action } = req.body;
  
    db('actions')
      .where(id)
      .update(action)
      .then(actions => res.status(200).json([actions]))
      .catch(err => res.status(500).json({ error: 'Unable to update action' }));
  });


  server.delete('/actions/:id', (req, res) => {
    const { id } = req.params.id;
    db('actions')
      .where('id')
      .del()
      .then(count => {
        if (count) {
          res.status(200).json({message: 'Action succesfully deleted'})
        } else {
          res.status(404).json({ message: `Action not found` });
        }
      })
      .catch(err => res.status(500).json({ message: 'Action could not be deleted' }));
  });

const port = 9000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});