const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

//------------PROJECT----------------

// GET

server.get("/projects", (req, res) => {
    db("projects")
      .then(projects => {
          res.status(200).json(projects)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });

  // GET BY ID

server.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    db("projects")
      .where({ id: id})
      .then(projects => {
          res.status(200).json(projects)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });

// POST

server.post("/projects", (req, res) => {
    const projects = req.body;

    db("projects")
      .insert(projects)
      .into("projects")
      .then(ids => {
          res.status(201).json({ids})
      })
      .catch(err => {
          res.status(500).json({ error: err })
      });
  });

//------------ACTIONS----------------

// GET

server.get("/actions", (req, res) => {
    db("actions")
      .then(actions => {
          res.status(200).json(actions)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });

  // GET BY ID

server.get("/actions/:id", (req, res) => {
    const { id } = req.params;
    db("actions")
      .where({ id: id})
      .then(actions => {
          res.status(200).json(actions)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });

// POST

server.post("/actions", (req, res) => {
    const actions = req.body;

    db("actions")
      .insert(actions)
      .then(ids => {
          res.status(201).json(ids)
      })
      .catch(err => {
          res.status(500).json({ error: err })
      });
  });















server.listen(6000, () => console.log("\n== Port 6k ==\n"));