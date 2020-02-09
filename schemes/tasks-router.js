const express = require("express");
const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.find()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting tasks" });
    });
});

router.post("/", (req, res) => {
  Tasks.add(req.body)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add task" });
    });
});

module.exports = router;
