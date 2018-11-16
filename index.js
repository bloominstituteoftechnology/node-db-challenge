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

const port = 5000;
server.listen(port, () => console.log(`\n Server Started on Port ${port} \n`));
