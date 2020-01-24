const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getProjectById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get project" });
    });
});

module.exports = router;
