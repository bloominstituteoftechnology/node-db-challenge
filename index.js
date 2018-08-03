const express = require('express');

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

const port = 6500;
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});