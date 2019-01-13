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

module.exports = router;
