const express = require("express");

const Projects = require("./projectModel.js");

const projectRouter = express.Router();

projectRouter.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(
        projects.map(project => {
          return { ...project, completed: project.completed ? true : false };
        })
      );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting projects" });
    });
});
projectRouter.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting resources" });
    });
});
projectRouter.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting tasks" });
    });
});

projectRouter.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error creating project" });
    });
});
projectRouter.post("/resources", (req, res) => {
  Projects.addResource(req.body)
    .then(resource => {
      res.status(201).json({ id: `${resource}`, ...req.body });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error creating resource" });
    });
});
projectRouter.post("/tasks", (req, res) => {
  const addedTask = req.body;
  Projects.addTask(req.body)
    .then(task => {
      res.status(201).json({ id: `${task}`, ...addedTask });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error creating new task" });
    });
});

module.exports = projectRouter;
