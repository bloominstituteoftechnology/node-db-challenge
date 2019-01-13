const express = require("express");
const router = express.Router();
const projectDB = require("../data/helpers/projectHelpers");
const actionDB = require("../data/helpers/actionHelpers");

router.post("/", (req, res) => {
  const newProject = req.body;
  projectDB
    .insert(newProject)
    .then(id => {
      res.json({ message: `new project created with id ${id}` });
    })
    .catch(err => {
      if (newProject.name && err.code === "SQLITE_CONSTRAINT") {
        res.status(400).json({ message: "please enter a unique project name" });
      } else if (err.code === "SQLITE_CONSTRAINT") {
        res.status(400).json({ message: "project name is required" });
      } else {
        res.status(500).json({ message: "could not create project" });
      }
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDB
    .getProject(id)
    .then(project => {
      const selectedProject = project[0];
      actionDB.getActionsByProjectId(id).then(actionResponse => {
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
      res.status(500).json({ message: "could not retrieve project" });
    });
});

router.get("/", (req, res) => {
  projectDB
    .getAll()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  projectDB
    .update(id, update)
    .then(response => {
      res.json({ message: `project with id ${response} has been updated.` });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projectDB
    .remove(id)
    .then(count => {
      res.json({ message: `project and all actions have been deleted.` });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
