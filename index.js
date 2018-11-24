const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.post("/projects", (req, res) => {
  const project = req.body;
  db("projects")
    .insert(project)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: "could not add a new project", err });
    });
});

server.post("/actions", (req, res) => {
  const action = req.body;
  db("actions")
    .insert(action)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: "could not add a new action", err });
    });
});

server.get("/projects/:id/actions", async (req, res) => {
  const { id } = req.params;
  const query1 = await db("projects").where("id", id);
  const query2 = await db("actions").where("project_id", id);
  const response = {
    ...query1[0],
    actions: query2
  };
  res.status(200).json(response);
});

server.get("/actions/:id/context", (req, res) => {
  const { id } = req.params;
  db("actions")
    .join("contexts", "actions.context_id", "contexts.id")
    .where("actions.id", id)
    .then(context => {
      res.status(200).json(context);
    })
    .catch(err => {
      res.status(500).json({ error: "could find a context", err });
    });
});

server.listen(4000, () => console.log("\n=== Server running on port 4000 ===\n"));
