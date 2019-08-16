const express = require("express");
const project = require("./project-model");
const router = express.Router();

router.get("/", (req, res) => {
  project
    .getProjects()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error getting the projects." });
    });
});

router.get("/resource", (req, res) => {
  project
    .getResources()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error getting the resources." });
    });
});

module.exports = router;
