const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();

// server config
const port = 7100; // port for server to run from
const serverName = `Sprint-Challenge-RDBMS`; // Name of server to display at "/" endpoint 

server.use(helmet());
server.use(express.json());

// server endpoints

server.get('/', (req, res) => { // sanity check
  res.send(`${serverName} running on port ${port}`);
});

server.get('/api/projects/:id', (req, res) => { // view all projects from db 'projects'
  const { id } = req.params;

  db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        db('actions')
          .where({ project_id: id })
          .then(acitons => {
            project.actions = actions;
            res.status(200).json(project);
          })
          .catch(err => res.json(err));
      } else {
        res.status(404).json({ message: 'pnf' });
      }
    })
    .catch(err => res.json(err));
})

// get = (id) => {
//   let query = db('actions');

//   if (id) {
//     return query
//       .where('id', id)
//       .first()
//       .then(action => action ? actionToBody(action) : undefined);
//   }

//   return query.then(actions => {
//     return actions.map(action => actionToBody(action));
//   });
// }

// function projectToBody(project) {
//   const result = {
//     ...project,
//     completed: intToBoolean(project.completed),
//   };

server.get('/api/actions', (req, res) => { // view all actions from db 'actions'
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err))
})

server.post('/api/projects', (req, res) => { // add project to db 'projects'
  const project = req.body;
  if (!req.body.name) {
    return res.status(400).json({ message: `ERROR: You must provide a name to submit a project.` });
  }
  db.insert(project)
    .into('projects')
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/api/actions", (req, res) => {
  const action = req.body;
  if (!req.body.description) {
    return res.status(400).json({ message: `ERROR: You must provide a name to submit an action.` });
  }
  if (!req.body.project_id) {
    return res.status(400).json({ message: `ERROR: You must provide a project_id to submit an action.` });
  }
  db.insert(action)
    .into("actions")
    .then(newAction => {
      res.status(201).json(newAction);
    })
    .catch(err => res.status(500).json(err));
});

server.listen({ port }, () => console.log(`## ${serverName} running on port ${port} ##`));