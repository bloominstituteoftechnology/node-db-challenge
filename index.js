const express = require("express");
const db = require("./data/db");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("working...");
});

server.get("/projects", (req, res) => {
  db("projects").then(projects => {
    res.status(200).json(projects);
  });
});

server.post("/projects", (req, res) => {
  const project = req.body;
  db.insert([project])
    .into("projects")
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, ...project });
    });
});

server.get("/actions", (req, res) => {
  db("actions").then(actions => {
    res.status(200).json(actions);
  });
});

server.post("/actions", (req, res) => {
  const action = req.body;
  db.insert([action])
    .into("actions")
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, ...action });
    });
});

const port = 8000;
server.listen(port, function() {
  console.log(`Web API listening on http://localhost:${port}`);
});
