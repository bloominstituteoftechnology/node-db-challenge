const express = require("express");
const db = require("./data/db.js");
const projectModel = require("./helpers/projectModel");
const server = express();
server.use(express.json());

///Endpoints
server.get("/", (req, res) => {
  res.send("We runnin....");
});

// PROJECTS------------------------------------------------------------------------------
//Get All Projects
server.get("/projects", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "The projects could not be retrieved." });
    });
});

//Post New Project
server.post("/projects", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      errorMessage: "Please provide name and description for the project."
    });
    return;
  }
  db()
    .insert({ name, description })
    .into("projects")
    .then(project => {
      res.status(201).json({ name, description });
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the project to the database"
      });
    });
});

// Update project
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      errorMessage: "Please provide name and description for the project."
    });
    return;
  }
  db("projects")
    .where("id", Number(id))
    .update({ name, description })
    .into("projects")
    .then(response => {
      res.status(200).json({ name, description });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be modified." });
      return;
    });
});

//Delete Project
server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where("id", Number(id))
    .delete()
    .then(projects => {
      if (projects.length === 0) {
        res.status(404).json({ message: "That ID doesn't exists" });
      }
      res.status(200).json({ message: "Success in deleting Project" });
    })
    .catch(error => {
      res.status(500).json({ error: "Error Deleting Project" });
    });
});

//Get Specific Project by ID
server.get("/projects/:id", (req, res) => {
  projectModel
    .get(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});

// ACTIONS------------------------------------------------------------------------------
//Get All Actions
server.get("/actions", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

//Post New Action
server.post("/actions", (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description) {
    res.status(400).json({
      errorMessage: "Please provide project id and description for the action."
    });
    return;
  }
  db()
    .insert({ project_id, description, notes })
    .into("actions")
    .then(project => {
      res.status(201).json({ project_id, description, notes });
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the action to the database"
      });
    });
});

// Update Action
server.put("/actions/:id", (req, res) => {
  const { id } = req.params;
  const { project_id, description, notes } = req.body;
  if (!project_id || !description) {
    res.status(400).json({
      errorMessage: "Please provide project ID and description for the action."
    });
    return;
  }
  db("actions")
    .where("id", Number(id))
    .update({ project_id, description, notes })
    .into("actions")
    .then(response => {
      res.status(200).json({ project_id, description, notes });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The action information could not be modified." });
      return;
    });
});

//Delete Action
server.delete("/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where("id", Number(id))
    .delete()
    .then(actions => {
      if (actions.length === 0) {
        res.status(404).json({ message: "That ID doesn't exists" });
      }
      res.status(200).json({ message: "Success in deleting action" });
    })
    .catch(error => {
      res.status(500).json({ error: "Error Deleting action" });
    });
});

const port = 3300;
server.listen(port, function() {
  console.log(
    `\n=== Yo Yo, Web API Listening on http://localhost:${port} ===\n`
  );
});
