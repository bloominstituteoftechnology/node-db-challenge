const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  Projects.findById(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Count not retrieve project" });
    });
});

module.exports = router;
