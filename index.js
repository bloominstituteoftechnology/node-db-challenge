const express = require("express");
const server = express();
const knex = require("knex");

const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);

const PORT = 4000;

server.use(express.json());

//POST add projects
server.post("/projects", (req, res) => {
  const newProject = req.body;
  db("projects")
    .insert(newProject)
    .then(id => {
      res.json({ message: `new project created with id ${id}` });
    })
    .catch(err => {
      console.log(err.Error);
      if (newProject.name && err.code === "SQLITE_CONSTRAINT") {
        res.status(400).json({ message: "please enter a unique project name" });
      } else if (err.code === "SQLITE_CONSTRAINT") {
        res.status(400).json({ message: "project name is required" });
      } else {
        res.status(500).json({ message: "could not create project" });
      }
    });
});

//POST add actions
server.post("/projects/actions", (req, res) => {
  const newAction = req.body;
  db("actions")
    .insert(newAction)
    .then(id => {
      res.json({ message: `new action created with id ${id}` });
    })
    .catch(err => {
      console.log(err.Error);
      if (err.code === "SQLITE_CONSTRAINT") {
        res.status(400).json({
          message: "action description and project id are required fields"
        });
      } else {
        res.status(500).json({ message: "could not create action" });
      }
    });
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where("projects.id", id)
    .then(project => {
      const selectedProject = project[0];
      console.log(selectedProject.id);
      db("actions")
        .select(
          "actions.id",
          "actions.action_description as description",
          "actions.notes",
          "actions.action_complete as complete"
        )
        .where("actions.project_id", id)
        .then(actionResponse => {
          res.json({
            id: selectedProject.id,
            name: selectedProject.name,
            description: selectedProject.description,
            completed: selectedProject.completed,
            actions: actionResponse
          });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "could not retrieve project" });
    });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
