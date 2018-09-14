const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);
const server = express();

server.use(express.json());
server.use(helmet());

//Test endpoint
server.get("/", (req, res) => {
  res.send("you made it!");
});

//GET's
server.get("/projects", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
server.get("/actions", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ project_id: id })
    .then(actions => {
      res.status(200).json({ actions: actions });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.get("/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ id })
    .then(action => {
      res.status(200).json({ action });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//POST's
server.post("/projects", (req, res) => {
  const project = req.body;
  db.insert(project)
    .into("projects")
    .then(project => json({ msg: "Project created" }))
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/actions", (req, res) => {
  const action = req.body;
  db.insert(action)
    .into("actions")
    .then(id => status(201).json(id))
    .catch(err => {
      res.status(500).json(err);
    });
});

//DELETE's

server.delete("/actions/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//PUT's
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;

  db("projects")
    .where({ id })
    .update({ name, description, completed })
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});
server.put("/actions/:id", (req, res) => {
  const { id } = req.params;
  const { notes, description, completed, project_id } = req.body;

  db("actions")
    .where({ id })
    .update({ description, notes, completed, project_id})
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});

const port = 8000;
server.listen(port, function() {
  console.log(`\n===> Web API Listening on http://localhost:${port} <===\n`);
});
