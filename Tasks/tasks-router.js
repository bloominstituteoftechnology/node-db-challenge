const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Tasks = require("./tasks-model");

router.get("/", (req, res) => {
  Tasks.getTasks().then(task => {
    res.status(200).json(task);
  });
});

router.get("/:id", (req, res) => {
  Tasks.getTasks(req.params.id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({
        message: "error"
      });
    });
});

router.post("/", (req, res) => {
  Tasks.insert(req.body)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({
        message: "error"
      });
    });
});

module.exports = router;