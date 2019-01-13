const express = require('express');
const knex = require('knex');

const configDB = require('./knexfile.js');

const server = express();
const db = knex(configDB.development);
const PORT = 4000;

server.use(express.json());

server.post('/api/projects', (req, res) => {
  const project = req.body
  db("projects").insert(project).then(proj => {
      res.status(201)
      .json(proj)
  })
})


server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
