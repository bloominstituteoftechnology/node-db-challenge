const express = require('express');
const projectModel = require('./data/helpers/projectModel.js');
const actionModel = require('./data/helpers/actionModel.js');

const db = require('./data/db')

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('sprinting... 65')
});
server.get('/projects', (req, res) => {//get all projects
    db('projects').then(project => {
        res.status(200).json(project)
    }).catch(err => res.status(500).json(err))
});
server.get('/projects/:id', (req, res) => {//get project by id
    const id = req.params.id;
    db('projects')
    .where('id', '=', id)
    .then(project => {
        res.status(200).json(project)
    }).catch(err => res.status(500).json(err))
});
server.post('/projects', (req, res) => {//add project
    const project = req.body;

    db.insert(project).into('projects').then(projects =>{
        const id = projects[0];
        res.status(201).json({id, ...project})
    }).catch(err => res.status(500).json(err))
})
server.delete('/projects/:id', (req, res) => {//delete project
    const id = req.params.id;
    
    db('projects')
    .where('id', '=', id)
    .del()
      .then(project => {
        if (project === 0) {
          res.status(404)
          .json({ error: "The projects with the specified ID does not exist." })
        }
        res.status(200).json(project)
      }).catch(error => {
        res.status(500)
          .json({ error: "error 2." })
      });
  })
  server.put('/projects/:id', (req, res) => {// update projects
    const changes = req.body;
    const id = req.params.id;
  
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
  server.get('/actions', (req, res) => {//get all actions
    db('actions').then(action => {
        res.status(200).json(action)
    }).catch(err => res.status(500).json(err))
});
server.get('/actions/:id', (req, res) => {//get actions by id
    const id = req.params.id;
    db('actions')
    .where('id', '=', id)
    .then(action => {
        res.status(200).json(action)
    }).catch(err => res.status(500).json(err))
});
server.post('/actions', (req, res) => {//add action
    const action = req.body;

    db.insert(action).into('actions').then(actions =>{
        const id = actions[0];
        res.status(201).json({id, ...action})
    }).catch(err => res.status(500).json(err))
})
server.delete('/actions/:id', (req, res) => {//delete action
    const id = req.params.id;
    
    db('actions')
    .where('id', '=', id)
    .del()
      .then(action => {
        if (action === 0) {
          res.status(404)
          .json({ error: "The actions with the specified ID does not exist." })
        }
        res.status(200).json(action)
      }).catch(error => {
        res.status(500)
          .json({ error: "error 2." })
      });
  })
  server.put('/actions/:id', (req, res) => {// update actions
    const changes = req.body;
    const id = req.params.id;
  
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
  server.get('/projectwactions/:id',(req, res) => {//get project acts
    
    const id = req.params.id;
    projectModel.get(id)//req.params.id
      .then(projects => {
        if (projects.length === 0) {
          res.status(404)
            .json({ error: "missing projects." })
        }
        res.status(200).json(projects)
      }).catch(error => {
        res.status(500)
          .json({ error: "The project with the specified id do not exist." })
      });
  
  })
const port = 6500;
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});