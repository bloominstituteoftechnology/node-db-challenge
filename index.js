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

//POST
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



//GET PROJECT BY ID that returns structure



//server running GET
server.get('/', (req, res) => {
  res.json({ api: 'server 7777 up and running!' });
});

server.listen(7777, () => console.log('\n== Port 7(repeat 4 *) ==\n'));