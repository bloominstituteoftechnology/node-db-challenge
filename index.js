const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const server = express();
const db = knex(knexConfig.development);
server.use(express.json());

//========================================================================== Sanity Check <----
server.get("/", (req, res) => {
  res.json({ api: "running" });
});
//========================================================================== Post <----
server.post("/projects", (req, res) => {
  const project = req.body;
  console.log(project);
  db("projects")
    .insert(project)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json({ message: "error creating project" }));
});

server.post("/actions", (req, res) => {
  const action = req.body;
  console.log(action);
  db("actions")
    .insert(action)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json({ message: "error creating project" }));
});

//========================================================================== get <----
server.get("/projects", (req, res) => {
  db("projects")
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err));
});

server.get("/actions", (req, res) => {
  db("actions")
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json(err));
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .first()
    .then(project => {
      db("actions")
        .where({ project: id })
        .then(actions => {
          project.actions = actions;
          res.status(200).json(project);
        });
    })
    .catch(err => res.status(500).json(err));
});

server.listen(9000, () => console.log("running on port 9000"));
