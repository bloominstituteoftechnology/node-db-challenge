const express = require('express');

const projectsDB = require('./data/projectdbConfig.js');
const actionsDB = require('./data/actionsdbConfig.js');

const server = express();

server.use(express.json());

//ENDPOINTS

//GETS
server.get('/projects', (req, res) => {
  projectsDB.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))
})

server.get('/actions', (req, res) => {
  actionsDB.getActions()
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err))
})

//GET PROJECT BY ID w structure
server.get('/projects/:id', (req, res) => {
  const { projectid } = req.params;
  projectsDB.getFullProject(projectid)
    // .where({id: projectid})
    // .then(projects => res.status(200).json(projects))
    // .catch(err => res.status(500).json(err))
    // .then(action => {
    //   return res.status(201).json({...project, actions:action})
    // })
    // .catch(err => {
    //   return res.status(500).json({message: 'error finding project', err})
    // })
})

//POSTS
server.post('/projects', (req, res) => {
  const project = req.body;

  projectsDB.addProject(project)
    .then(project => {
      res.status(201).json({message: 'project added', project})
    })
    .catch(err => {
      res.status(500).json({message: 'error inserting project', err})
    })
});

server.post('/actions', (req, res) => {
  const action = req.body;

  actionsDB.addAction(action)
    .then(action => {
      res.status(201).json({message: 'action added', action})
    })
    .catch(err => {
      res.status(500).json({message: 'error inserting action', err})
    })
});


//server running GET
server.get('/', (req, res) => {
  res.json({ api: 'server 7777 up and running!' });
});

server.listen(7777, () => console.log('\n== Port 7(repeat 4 *) ==\n'));