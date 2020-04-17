const express = require("express");

const server = express.Router();

const db = require("../models/task-model");

server.get("/", (req, res) => {
  db.find().then((tasks) => res.status(200).json(tasks));
});

server.get("/by-project/:id", (req, res) => {
  const project_id = req.params.id;
  db.findByProjectId(project_id).then((tasks) => res.status(200).json(tasks));
});

server.post("/", (req, res) => {
  const taskData = req.body;
  db.add(taskData).then((addedTask) => res.status(201).json(addedTask));
});

module.exports = server;
