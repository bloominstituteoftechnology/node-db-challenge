const express = require("express");

const db = require("../models/project-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.find().then((projects) => res.status(200).json(projects));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((project) => res.status(200).json(project))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  // example data: { name: required, description: optional, completed: boolean }
  const projectData = req.body;
  db.add(projectData)
    .then((project) => res.status(201).json(project))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
