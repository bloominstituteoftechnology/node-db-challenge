// external imports
const express = require("express");
const knex = require("knex");

//internal imports
const knexConfig = require("./knexfile");

// init server and db
const db = knex(knexConfig.development);
const server = express();

//middleware
server.use(express.json());

//MVP endpoints
//POST new project
server.post("/api/projects", (req, res) => {
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(400).json({
      message: "Please fill out the name and description for the new project."
    });
  } else {
    if (project.completed === undefined) {
      project.completed = false;
    }
    db("projects")
      .insert(project)
      .then(id => res.status(201).json(id))
      .catch(err =>
        res
          .status(500)
          .json({ error: "Error while attempting to save new project." })
      );
  }
});

//POST new action
server.post("/api/actions", (req, res) => {
  const action = req.body;
  if (!action.project_id || !action.description) {
    res.status(400).json({
      message: "Please include a project ID and description for the new action."
    });
  } else {
    if (action.completed === undefined) {
      action.completed = false;
    }
    db("projects")
      .where({ id: action.project_id })
      .then(project => {
        if (!project || !project.length) {
          res.status(404).json({ message: "No project with that ID exists." });
        } else {
          db("actions")
            .insert(action)
            .then(id => res.status(201).json(id))
            .catch(err =>
              res
                .status(500)
                .json({ error: "Error while attempting to save new action." })
            );
        }
      });
  }
});

//GET project by ID

//listener
const port = 8000;
server.listen(port, () => console.log(`\n API running on port ${port}`));
