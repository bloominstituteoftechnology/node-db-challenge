const express = require("express");

const Project = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.find()
    .then(project => {
      const convertBoolean = project.map(project => {
        if (project.project_completed == 0) {
          return { ...project, project_completed: false };
        } else if (project.project_completed == 1) {
          return { ...project, project_completed: true };
        }
      });
      res.status(200).json(convertBoolean);
    })
    .catch(err => res.status(500).json({ message: "Could not get projects" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Project.getByID(id)
    .then(project => {
      if (!project[0]) {
        return res.status(404).json({ message: "That id does not exist" });
      } else {
      }
      const convertBoolean = project.map(project => {
        if (project.project_completed == 0) {
          return { ...project, project_completed: false };
        } else {
          return { ...project, project_completed: true };
        }
      });
      res.status(200).json(convertBoolean);
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "Could not retrieve this project", error: err })
    );
});

router.post("/", (req, res) => {
  const projectBody = req.body;
  if (!projectBody.project_name) {
    return res.status(400).json({ message: "Please add a project name" });
  } else if (!projectBody.description) {
    return res.status(400).json({ message: "Please add an description" });
  } else if (!projectBody.project_completed) {
    return res
      .status(400)
      .json({ message: "Please add whether or not the project was completed" });
  } else {
  }
  Project.add(projectBody)
    .then(project => res.status(201).json(project))
    .catch(err =>
      res.status(500).json({ message: "There was an error adding the project" })
    );
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Project.getTasks(id)
    .then(task => {
      if (!task[0]) {
        return res.status(404).json({ message: "This id does not exist" });
      }
      const convertBoolean = task.map(task => {
        if (task.task_completed == 0) {
          return { ...task, task_completed: false };
        } else if (task.completed == 1) {
          return { ...task, task_completed: true };
        }
      });
      res.status(200).json(convertBoolean);
    })
    .catch(err => res.status(500).json({ message: "Could not get this task" }));
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const taskBody = req.body;
  console.log("taskbody", taskBody);
  console.log("id", id);

  Project.addTask(id, taskBody)
    .then(task => res.status(201).json(task))
    .catch(err =>
      res.status(500).json({ message: "Could not create task", error: err })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Project.remove(id)
    .then(project => {
      if (!project[0]) {
        return res.status(404).json({ message: "This id does not exists" });
      } else {
      }
      res.status(200).json({ message: "Project has been deleted" });
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "Could not delete this project", error: err })
    );
});

module.exports = router;
