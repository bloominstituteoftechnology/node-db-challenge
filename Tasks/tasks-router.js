const express = require("express");
const tasks = require("./tasks-model");
const router = express.Router();

router.get("/", (req, res) => {
  tasks
    .get()
    .then(tasks => {
      for (i = 0; i < tasks.length; i++) {
        tasks[i].completed === 0
          ? (tasks[i].completed = false)
          : (tasks[i].completed = true);
      }

      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving tasks"
      });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  tasks
    .add(body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error posting task"
      });
    });
});
module.exports = router;
