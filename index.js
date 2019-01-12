const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;
server.use(express.json());
const knex = require('knex')
const dbConfig = (require('./knexfile'))
const db = knex(dbConfig.development)

server.post('/api/actions', (req,res) => {
const action = req.body;
});

server.post('/api/actions', (req, res) => {
  const action = req.body;
});

server.get('/api/projects/:id', req,res => {
  const {id} = req.params;
})



server.listen(PORT, () => {
  console.log(`server is up and running on ${PORT}`)
})