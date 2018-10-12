// imports
const express = require("express");
// instantiate server
const server = express();
server.use(express.json());

// endpoints

// post project
server.post("/api/projects", (req, res) => {
  const project = req.body;
  db("projects")
    .insert(project)
    .then(ids => res.status(201).json(ids[0]))
    .catch(err =>
      res.status(500).json({ error: "Data could not be retrieved" })
    );
});

// post action
server.post("/api/actions", (req, res) => {
  const action = req.body;
  db("actions")
    .insert(action)
    .then(ids => res.status(201).json(ids[0]))
    .catch(err =>
      res.status(500).json({ error: "Data could not be retrieved" })
    );
});

// get projects
server.get("/api/projects", (req, res) => {
  db("projects")
    .then(project => res.status(200).json(project))
    .catch(err =>
      res.status(500).json({ error: "Data could not be retrieved" })
    );
});

// get project
server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .then(project => {
      db("actions")
        .where({ project_id: id })
        .then(actions => {
          res.status(200).json({ project, actions });
        })
        .catch(err => {
          res.status(500).json({ error: "Data could not be retrieved" });
        });
    });
});

// get actions
server.get("/api/actions/", (req, res) => {
  db("actions")
    .then(action => res.status(200).json(action))
    .catch(err =>
      res.status(500).json({ error: "Data could not be retrieved" })
    );
});

// server port
server.listen(9000, () => {
  console.log("Server running on port 9000");
});

// knex
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);
