const express = require("express");
const knex = require("knex");

const projects = require("./projects.js");
const actions = require("./actions.js");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();
server.use(express.json());

// add a new project
server.post("/projects", (req, res) => {
  const { name, description, completed } = req.body;
  const project = { name, description, completed };
  if (!project) {
    return res.status(400).send({
      errorMessage: "Please provide a name for the project."
    });
  }
  projects
    .addProject(project)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({
        error: "Can not post the project. project may already exist."
      });
    });
});

server.get("/projects", (req, res) => {
  projects
    .getProjects()
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err));
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      if(project) {
        db('actions')
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          });
      } else {
        res.status(404).json({ message: 'project not found' });
      }
    });
});


// actions
server.post("/actions", (req, res) => {
  const { description, notes, completed, project_id } = req.body;
  const action = { description, notes, completed, project_id };
  if (!action) {
    return res.status(400).send({
      errorMessage: "Please provide a description for the action."
    });
  }
  actions
    .addAction(action)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({
        error: "Can not post the action. action may already exist."
      });
    });
});

server.get("/actions", (req, res) => {
  actions
    .getActions()
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json(err));
});

server.get("/actions/:id", (req, res) => {
  const { id } = req.params;
  actions
    .getAction(id)
    .then(action => {
      if (!action) {
        return res.status(404).json({
          message: "Can not find action with specified ID."
        });
      }
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

const port = 8000;
server.listen(port, () => console.log(`\n== Port: ${port} ==\n `));
