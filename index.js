const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;
server.use(express.json());
const knex = require('knex')
const dbConfig = (require('./knexfile'))
const db = knex(dbConfig.development)

//POST for adding proje

server.post('/api/actions', (req,res) => {
const action = req.body;
});

// POST for adding actions

server.post('/api/actions', (req, res) => {
  const action = req.body;
});
//GET for retrieving a project by its id that returns an object(See Readme For Details)

server.get('/api/projects/:id', req,res => {
  const {id} = req.params;
})

server.listen(PORT, () => {
  console.log(`server is up and running on ${PORT}`)
})