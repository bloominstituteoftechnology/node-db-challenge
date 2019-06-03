const express = require("express");

const projectsDb = require("./projects-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await projectsDb.find();
    res.status(200).json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the tracks" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const projects = await projectsDb.getByIdComplete(id);
    res.status(200).json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the tracks" });
  }
});

router.post("/", async (req, res) => {
  const project = req.body;

  if (project.name) {
    try {
      const insert = await projectsDb.insert(project);
      res.status(201).json(insert);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the project" });
    }
  } else {
    res.status(400).json({ message: "Please provide name of the project" });
  }
});

module.exports = router;
