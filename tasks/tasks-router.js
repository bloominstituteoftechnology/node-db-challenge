const express = require("express");

const Tasks = require("./tasks-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.getTaskById(id)
    .then(task => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get task" });
    });
});

router.post("/", (req, res) => {
  const taskBody = req.body;
  // console.log(taskBody, "taskData tasks-router line 37");

  Tasks.add(taskBody)
    .then(createTask => {
      // console.log(createTask, "task line 40");
      res.status(201).json({ message: "New task created!", createTask });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new task" });
    });
});

router.delete("/:id", validateId, (req, res) => {
  const id = req.params.id;

  Tasks.getTaskById(id)
    .then(deleteTask => {
      Tasks.remove(id)
        .then(deleted => {
          res.status(200).json({
            message: `The task with id: ${id} was deleted`,
            deleteTask
          });
        })
        .catch(() => {
          res
            .status(500)
            .json({ message: "There was an error deleting the task" });
        });
    })
    .catch(() => {
      res
        .status(500)
        .json({
          message: "Deleting the resource...Something went wrong, try again!"
        });
    });
});

// custom middleware-----------------------------

// Validate ID
function validateId(req, res, next) {
  const id = req.params.id;
  Tasks.getTaskById(id)
    .then(id => {
      req.project = id;
    })
    .catch(() => {
      res.status(400).json({ message: "invalid task id" });
    });
  next();
}

module.exports = router;
