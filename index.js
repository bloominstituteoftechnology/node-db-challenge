const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const PORT = 5000;

server.use(express.json());

server.get("/projects", (req, res) => {
db("projects")
.then(projects => {
    res.status(200).json(projects)
})
.catch(err => {
    res
    .status(500)
    .json({error: "cant find the projects"})
});
});

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

  server.get("/actions", (req, res) => {
    db("actions")
      .then(actions => {
          res.status(200).json(actions)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });

  

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

  server.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`);
})