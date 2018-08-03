const express = require('express');
const projectsDB = require('./data/helpers/projectsDB');
const actionsDB = require('./data/helpers/actionsDB');

const server = express();
server.use(express.json());
const PORT = 3000;
const { projectConstraints, actionConstraints } = require('./middleware');
const errors = require('./middleware/errors');

// endpoints here
server.get('/', (req, res) => {
  res.send('working...');
});

/* 
  PROJECTS API
*/
server.get('/api/projects', async (req, res) => {
  try {
    const projects = await projectsDB.get();
    if (projects.length === 0) {
      res.status(200).json({ message: 'There are currently no projects' });
    } else {
      res.status(200).json(projects);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

server.get('/api/projects/:id', async (req, res) => {
  const ID = req.params.id;

  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(200).json({ message: `There is no project with id:${ID}` });
    } else {
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

/* 
  ACTIONS API
*/
server.get('/api/actions', async (req, res) => {
  try {
    const actions = await actionsDB.get();
    if (actions.length === 0) {
      res.status(200).json({ message: 'There are currently no actions' });
    } else {
      res.status(200).json(actions);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

server.get('/api/actions/:id', async (req, res) => {
  const ID = req.params.id;

  try {
    const action = await actionsDB.get(ID);
    if (typeof action === 'undefined') {
      res.status(200).json({ message: `There is no action with id:${ID}` });
    } else {
      res.status(200).json(action);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// error handling
server.use(errors);

// not found - 404
server.use((req, res) => {
  res.status(404).send(`<h1>404: resource "${req.url}" not found</h1>`);
});

server.listen(
  PORT,
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`),
);
