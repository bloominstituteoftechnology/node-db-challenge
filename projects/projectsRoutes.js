const express = require("express");

const projects = require("./projectsModel.js");

const router = express.Router();

//=============== PROJECT ENDPOINTS =============== //

// get a list of projects
router.get("/", (req, res) => {
  projects
    .find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

// Add a project
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const project = { name, description };

  if (!name || !description) {
    return res.status(400).json({
      error: "Please provide a name and a description for your project."
    });
  }
  projects
    .add(project)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
