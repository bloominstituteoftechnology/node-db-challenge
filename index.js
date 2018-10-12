const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const server = express();

//import data model
const db = require("./data/dataModel.js");

//apply middleware
server.use(express.json());
server.use(helmet());

//Routes
server.get("/api/projects", (req, res) => {
  db.find()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

server.post("/api/projects", (req, res) => {
  const newProject = req.body;
  db.insert(newProject)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

server.get("/api/projects/:id", (req, res) => {
  const id = req.params.id;
  let project = {};
  if (!id) {
    res.status(400).json({ error: "Bad request" });
  }
  //retrieve project
  db.findById(id)
    .then(result => {
      if (result) {
        project = result;

        //retreive project actions
        db.getProjectActions(id)
          .then(actionsObj => {
            project.actions = actionsObj;
            res.status(200).json(project);
          })
          .catch(err =>
            res
              .status(200)
              .json({ error: "There was an error retrieving the project" })
          );
      } else
        res
          .status(200)
          .json({ error: "There was an error retrieving the project" });
    })
    .catch(err =>
      res
        .status(200)
        .json({ error: "There was an error retrieving the project" })
    );
});

server.post("/api/projects/:id/actions", (req, res) => {
  const id = req.params.id;
  let newAction = req.body;
  newAction.project_id = id;
  console.log(newAction);
  db.insertAction(newAction)
    .then(id => {
      if (id) {
        res.status(201).json({ message: "New action was added" });
      }
    })
    .catch(err => console.log(err));
});

//Listen on port
server.listen(9000, () => {
  console.log("API IS running");
});
