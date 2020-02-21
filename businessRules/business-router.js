/*jshint esversion: 6 */
const express = require("express");

const Business = require("./business-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Business.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/resources", (req, res) => {
  Business.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.get("/tasks/:id", (req, res) => {
  const { project_id } = req.params;
  Business.getTasksWithProject(project_id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;

  Business.addResources(resourceData)
    .then(resourceNew => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Business.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});
router.post("/tasks", (req, res) => {
  const taskData = req.body;

  Business.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
