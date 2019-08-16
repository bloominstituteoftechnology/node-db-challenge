const express = require("express");
const project = require("./project-model");
const router = express.Router();

// post project
router.post("/", (req, res) => {
  project
    .addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: "There was an error add the project." });
    });
});

// get project
router.get("/", (req, res) => {
  let projects = project.getProjects();

  project
    .getProjects()
    .then(projects => {
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].completed === 0) {
          projects[i].completed = false;
        } else {
          projects[i].completed = true;
        }
      }
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error getting the projects." });
    });
});

// post resource
router.post("/resource", (req, res) => {
  project
    .addResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the resource." });
    });
});

// get resource
router.get("/resource", (req, res) => {
  project
    .getResources()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error getting the resources." });
    });
});

// post task
router.post("/task", (req, res) => {
  project
    .addTask(req.body)
    .then(task => {
      console.log(task);
      res.status(201).json(task);
    })
    .catch(error => {
      res.status(500).json({ message: "There was an error adding the task." });
    });
});

// get task
router.get("/task", (req, res) => {
  project
    .getTasks()
    .then(task => {
      console.log(task);
      res.status(200).json(task);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error getting the tasks." });
    });
});

module.exports = router;
