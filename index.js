const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(
    `<div>
      <p>Projects:  /api/projects</p>
      <p>Actions:  /api/actions</p>
    </div>`
  );
});

// GET project by ID
server.get('/api/projects/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db('projects').where({ id });
    const actions = await db
      .select('actions.*')
      .from('projects')
      .join('actions', 'projects.id', 'actions.project_id')
      .where({ 'projects.id': id });
    return !project.length
      ? res.status(404).json({ message: "That project doesn't exist." })
      : res.status(200).json({ ...project[0], actions });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'There was a problem getting that project.' });
  }
});

// Adding a new PROJECT
server.post('/api/projects', async (req, res) => {
  const projectData = req.body;
  try {
    const id = await db.insert(projectData).into('projects');
    res.status(201).json(id);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'There was an error creating that project.' });
  }
});

// Adding a new PROJECT
server.post('/api/actions', async (req, res) => {
  const actionData = req.body;
  try {
    const id = await db.insert(actionData).into('actions');
    res.status(201).json(id);
  } catch (error) {
    res.status(500).json({ error: 'There was an error creating that action.' });
  }
});

const port = 5000;
server.listen(port, () => console.log(`\n Server Started on Port ${port} \n`));
