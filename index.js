const express = require('express');
const server = express();
const knex = require('knex');
const dBConfig = require('./knexfile');
const db = knex(dBConfig.development);

//Middleware
server.use(express.json());

//Endpoints

//Projects Table
server.post('/api/projects', (req, res) => {
    const project = req.body;
    db.insert(project).into('projects').then(res => res.status(201).json(res))
    .catch(err => res.status(500).json(err));
});
server.get('/api/projects', (req, res) => {
    db('projects').then(projects => { res.status(200).json(projects);
})
.catch(err => res.status(500).json(err));
});

server.get("/api/projects/:id", (req, res) => {
    const { id } = req.params;
  
    db("projects")
      .where({ id })
      .then(project => {
        if (project.length) {
          db("actions")
            .where({ project_id: id })
            .then(actions => {
              project.actions = actions;
              res.status(200).json({ project, actions });
            })
            .catch(err => {
              res.status(500).json(err);
            });
        } else {
          res.status(404).json({ msg: "not found" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

server.put('/api/projects', (req, res) => {
   db.update(req.params.id, req.body) 
    .then(projects => res.status(200).json(posts))
    .catch(err => res.status(500).json(err));
});

server.delete('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    db('projects').where({id}).del()
        .then(count => res.status(204).end())
        .catch(err => res.status(500).json(err));
        
});

//Actions Table
server.post('/api/actions', (req, res) => {
    const action = req.body;
    db.insert(action).into('actions').then(res => res.status(201).json(res))
        .catch(err => res.status(500).json(err));
});

server.get('/api/actions', (req, res) => {
    db('actions').then(actions => { res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});




server.listen(3000, console.log('Listening on Port 3000'));