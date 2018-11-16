const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

// Testing API
server.get("/", (req, res) => {
  res.status(200).json({ message: "Server on board" });
});

// POST for projects

server.post("/api/projects", (req, res) => {
  const project = req.body;
  db("projects")
    .insert(project)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "There was an error with posting your project, please try again."
      });
    });
});

// Post for actiond

server.post("/api/actions", (req, res) => {
  const action = req.body;

  db("actions")
    .insert(action)
    .into("actions")
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error, please try again" });
    });
});

// Get for projects

server.get("/api/projects", (req, res) => {
  db("projects")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error, please try again." });
    });
});

// GET requests for individual projects

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .first()
    .then(project => {
      db("actions")
        .where({ project_id: id })
        .then(actions => {
          project.actions = actions;
          res.status(200).json(project);
        });
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error, please try again" });
    });
});

const port = 3300;
server.listen(port, () => {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
