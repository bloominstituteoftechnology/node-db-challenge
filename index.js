const express = require('express');
const knex = require('knex');

const db_config = require('./knexfile');

const server = express();
const db = knex(db_config.development);

server.use(express.json());

//endpoints

//POST for adding projects
server.post('/api/projects', (req, res) => {

})

//POST for adding actions
server.post('/api/actions', (req, res) => {
  
})

//GET for retrieving a project by its ID
server.get('/api/projects/:id', (req, res) => {
  
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})