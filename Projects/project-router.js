const express = require("express");
const projects = require("./project-model");
const tasks = require("../Tasks/tasks-model");
const resources = require("../Resources/resources-model");
const router = express.Router();

router.get("/", (req, res) => {
  projects
    .get()
    .then(projects => {
      for (i = 0; i < projects.length; i++) {
        projects[i].completed === 0
          ? (projects[i].completed = false)
          : (projects[i].completed = true);
      }
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving projects"
      });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  projects
    .add(body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error posting project"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  projects
    .getById(id)
    .then(project => {
      project.completed === 0
        ? (project.completed = false)
        : (project.completed = true);

      tasks.getProjectTasks(id).then(tasks => {
        for (i = 0; i < tasks.length; i++) {
            tasks[i].completed === 0
              ? (tasks[i].completed = false)
              : (tasks[i].completed = true);
          }
        resources.get().then(resources => {
          res.status(200).json({ project, tasks, resources });
        });
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving project"
      });
    });
});
module.exports = router;
