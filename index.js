const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());

server.post('/api/projects', async (req, res) => {
  const newProject = req.body;

  try {
    const project = await db('projects').insert(newProject)
    res.status(201).json(project)
  } catch (e) {
    res.status(500).json({error: "Something went wrong with the server"});
  }
});

server.post('/api/actions', async (req, res) => {
  const newAction = req.body;

  try {
    const action = await db('actions').insert(newAction);
    res.status(200).json(action);
  } catch (e) {
    res.status(500).json({error: "Something went wrong with the server."});
  }
})


server.listen(8000, () => {
  console.log('Server is running on Port: 8000');
})