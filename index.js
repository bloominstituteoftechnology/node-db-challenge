const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

// POST //
server.post("/api/projects", (req, res) => {
  const { name } = req.body;
  const project = { name };
  db.insert(project)
    .into("projects")
    .then(response => res.status(201).json(response))
    .catch(err => {
      err.errno === 1 ? res.status(400).json({ error: "invalid input"}): res.status(500).json({error: `Server error: ${err}`})
    });
});

server.post("/api/actions", (req, res) => {
  const { name } = req.body;
  const action = { name };
  db.insert(action)
    .into("actions")
    .then(response => res.status(201).json(response))
    .catch(err => {
      err.errno === 1 ? res.status(400).json({ error: "invalid input"}): res.status(500).json({error: `Server error --> ${err}`})
    });
});


///////////////////

// server listener
server.listen(5000, () => console.log(`Server listening to port 5000`));