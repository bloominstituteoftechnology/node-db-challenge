const express = require("express");
const Tasks = require("./model");
const Projects = require("../projects/model");
const router = express.Router();

//adding tasks
router.post("/:id/addTask", (req, res) => {
  Projects.getProjectById(req.params.id)
    .then(project => {
      if (project) {
        const taskToAdd = { ...req.body, completed: 0 };
        Tasks.addTask(taskToAdd, req.params.id).then(task => {
          res.status(201).json(task);
        });
      } else {
        res.status(404).json({
          message: "Could not find project with the ID to add the taske"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Could create new task" });
    });
});

// retrieving a list of tasks - TESTED
router.get("/", (req, res) =>
  Tasks.getTasks()
    .then(tasks => {
      const updated = tasks.map(task => {
        if (task.completed === 0) {
          task.completed = false;
        } else if (task.completed === 1) {
          task.completed = true;
        }
        return task;
      });
      res.status(200).json(updated);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Could not get tasks" });
    })
);
module.exports = router;
