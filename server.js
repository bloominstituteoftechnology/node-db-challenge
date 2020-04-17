const express = require('express');

const server = express();
const db = require('./db-config')

server.use(express.json());

server.get('/api/projects', (req, res) => {
    // GET projects from the db
    db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.get('/api/resources', (req, res) => {
    // GET all resources from the database
    db('resources')
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.get('/api/tasks', (req, res) => {
    // GET all tasks from the database
    db('tasks')
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.post('/api/projects', (req, res) => {
      db('projects').insert(req.body)
      .then(project => {
          res.status(201).json(project)
      })
      .catch(error => {
          res.status(500).json(error);
      });
  }); 

  server.post('/api/resources', (req, res) => {
    db('resources').insert(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        res.status(500).json(error);
    });
}); 

// actionRouter.post("/", (req, res) => {
//     actionHelpers
//       function insert(action) {
//     return db('actions')
//     .insert(action, 'id')
//     .then(([id]) => get(id));
// }
//       .then((newAction) => {
//         res.status(200).json(newAction);
//       })
//       .catch((err) => {
//         console.log("something went wrong", err);
//       });
//   });
// '/api/projects/:project_id/actions'
server.post('/api/projects/:projectsId/tasks', (req, res) => {
    db('tasks').insert({...req.body, project_id: req.params.projectsId})
    .then(task => {
        res.status(201).json(task)
    })
    .catch(error => {
        res.status(500).json(error);
    });
}); 

// knex('books').insert({title: 'Slaughterhouse Five'})







module.exports = server;