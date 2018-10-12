const express = require("express");
const helmet = require("helmet");
const knexConfig = require("./knexfile.js");
const knex = require("knex");
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        db("actions")
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      } else {
        res.status(404).json({ error: "no project found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/api/projects", (req, res) => {
  const project = req.body;
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "please provide a name for your project." });
  }
  db.insert(project)
    .into("projects")
    .then(id => {
      res.status(200).json(id);
    })
    .catch(err => res.status(500).json(err.message));
});

server.post("/api/actions", (req, res) => {
  const action = req.body;
  if (!action) {
    res.status(400).json({ error: "please provide an action." });
  }
  db.insert(action)
    .into("actions")
    .then(id => {
      res.status(200).json(id);
    })
    .catch(err => res.status(500).json(err.message));
});

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== API Listening on http://localhost:${port} ===\n`);
});
