const express = require('express');
const projectDB = require('./data/helpers/projectDB');

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
    const projects = await projectDB.get();
    if (projects.length === 0) {
      res.status(200).json({ message: 'There are currently no projects' });
    } else {
      res.status(200).json(projects);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get('/api/projects/:id', async (req, res) => {
  const ID = req.params.id;

  try {
    const project = await projectDB.get(ID);
    console.log('PROJECT', project);
    if (typeof project === 'undefined') {
      res.status(200).json({ message: `There is no project with id:${ID}` });
    } else {
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).json(err);
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
