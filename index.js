const express = require("express");
const knex = require("knex");

const dbConfig = require("./knexfile.js");

const server = express();
const db = knex(dbConfig.development);
const PORT = 5200;

server.use(express.json());

// Post - add projects
server.post("/projects", (req, res) => {
  const project = req.body;
  db("projects")
    .insert(project)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ err: "Failed to add project" });
    });
});

// Post - add actions
server.post("/actions", (req, res) => {
  const action = req.body;
  db("actions")
    .insert(action)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ err: "Failed to add action" });
    });
});

// Get projects that add actions to the project in an array

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = [];
  db("projects")
    .where("id", id)
    .then(proj => {
      project[0] = proj[0];
    })
    .then(
      db("actions")
        .where("proj_id", id)
        .then(actions => {
          project[0].actions = actions;
        })
        .then(() => {
          res.json(project);
        })
    )
    .catch(err => {
      res
        .status(500)
        .json({ err: "Problem with the project number requested" });
    });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
