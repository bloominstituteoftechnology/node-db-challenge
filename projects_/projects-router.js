const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

//GET all Projects
router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error fetching projecs from database" });
    });
});

//GET project by ":id"
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getById(id)
    .then(project => {
      const booleanProject = {
        ...project[0],
        completed: !!+`${project.completed}`
      };

      if (!project[0]) {
        return res.status(404).json({ message: "Invalid project id" });
      } else {
        res.status(200).json(booleanProject);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error fetching project from database" });
    });
});

//POST new project
router.post("/", (req, res) => {
  const project = req.body;

  if (!project.name) {
    return res.status(404).json({ message: "Missing project name" });
  }

  project.completed = project.completed ? 1 : 0;

  Projects.add(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error adding project to database" });
    });
});

//Tasks

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status({ message: "Something went wrong.." });
    });
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = req.body;

  task.completed = task.completed ? 1 : 0;
  task.project_id = id;
  Projects.addTask(task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Oops, something went wrong." });
    });
});

module.exports = router;
