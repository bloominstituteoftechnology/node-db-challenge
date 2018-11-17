const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.post("/api/projects", (req, res) => {
  const project = req.body;

  db("projects")
    .insert(project)
    .returning("id")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error inserting", err });
    });
});

server.post("/api/actions", (req, res) => {
  const action = req.body;

  db("actions")
    .insert(action)
    .returning("id")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error inserting", err });
    });
});

server.get("/api/projects/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const actionsList = db("projects")
      .join("actions", "projects.id", "=", "actions.project_id")
      .where("projects.id", "=", id)
      .select(
        "actions.id",
        "actions.description",
        "actions.notes",
        "actions.complete"
      )
      .then(actions => actions.map(action => action));

    const result = await actionsList;

    db("projects")
      .where({ id: id })
      .then(project => {
        res.status(200).json({
          id: project[0].id,
          name: project[0].name,
          description: project[0].description,
          completed: project[0].complete ? "true" : "false",
          actions: result
        });
      })
      .catch(err => res.status(500).json(err));
  } catch (err) {
    console.log(err);
  }
});

server.put("/api/projects/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("projects")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

server.put("/api/actions/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("actions")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

server.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

server.delete("/api/actions/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

server.listen(9000, () => console.log("port 9000 is running"));
