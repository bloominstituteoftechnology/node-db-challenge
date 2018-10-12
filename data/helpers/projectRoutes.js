const express = require("express");

const projects = require("./projectsModel.js");

const router = express.Router();

// get a list of projects
router.get("/", (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

//get project by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projects.getProject(id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "project not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//create projects
router.post("/", (req, res) => {
  const project = req.body;

  projects
    .addProject(project)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
