const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints

// get all

server.get("/api/projects", (req, res) => {
  db("projects")
    .then(projects =>
      res.status(200).json(
        projects.map(project => ({
          ...project,
          completed: project.completed ? true : false
        }))
      )
    )
    .catch(err => {
      res.status(500).json({ error: err });
      console.error(err);
    });
});

server.get("/api/actions", (req, res) => {
  db("actions")
    .then(actions =>
      res.status(200).json(
        actions.map(action => ({
          ...action,
          completed: action.completed ? true : false
        }))
      )
    )
    .catch(err => {
      res.status(500).json({ error: err });
      console.error(err);
    });
});

// get project by id

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where("id", id)
    .first()
    .then(project => {
      db("actions")
        .where("project_id", project.id)
        .then(actions =>
          res.status(200).json({
            id: project.id,
            name: project.name,
            description: project.description,
            completed: project.completed ? true : false,
            actions: actions.map(action => ({
              ...action,
              completed: action.completed ? true : false
            }))
          })
        );
    })
    .catch(err => {
      res.status(500).json({ error: err });
      console.error(err);
    });
});

// post

server.post("/api/projects", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ message: "Please provide a name and description" });
    return;
  } else {
    const newProject = { name, description };
    db("projects")
      .insert(newProject)
      .then(id => {
        res.status(201).json(`Added project with id of ${id}`);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error inserting", err });
      });
  }
});

server.post("/api/actions", (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res
      .status(400)
      .json({ message: "Please provide project_id, description, and notes." });
    return;
  } else {
    const newAction = { project_id, description, notes };
    db("actions")
      .insert(newAction)
      .then(id => {
        res.status(201).json(`Added action with id of ${id}`);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error inserting", err });
      });
  }
});

const port = 3300;
server.listen(port, () => {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
