const express = require('express');
const server = express();
const dbConfig = require('./data/dbConfig');

const PORT = 8000;

server.use(express.json());

server.get('/projects', async (req, res) => {
  try {
    const projects = await dbConfig('projects');
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).send(`You done goofed with ${err}`);
  }

});

server.get('/projects/:id', async (req, res) => {
  try {
    const project = await dbConfig('projects').where('id', req.params.id).first();
    const actions = await dbConfig('actions').where('project_id', req.params.id);
    project.actions = actions;
    res.status(200).json(project);
  } catch (err) {
    res.status(500).send(`You done goofed with ${err}`);
  }
});



server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
