const express = require('express');
const helmet = require('helmet');
const dbProjects = require('./models/project_models');
const dbActions = require('./models/action_models');

const server = express();
server.use(express.json());
server.use(helmet());

// post to projects

server.post('/api/projects', (req, res) => {
  const { name, description } = req.body;
  dbProjects.add({ name, description })
  .into('projects')
  .then(newProject => res.status(201).json(newProject))
  .catch(err => res.status(500).json(err));
});

// get projects

server.get('/api/projects',(req,res)=> {
  dbProjects.find('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

// server instantiation

const port = 8000;

server.listen(port, () => console.log(`Server listening on port ${port}.`));
