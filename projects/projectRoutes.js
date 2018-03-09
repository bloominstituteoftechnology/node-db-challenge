const express = require("express");
const knex = require("../database/db");
const projects = require("./projectControllers");

const projectRouter = express.Router();

projectRouter.get("/", (req, res) => {
  projects.getAll().then(projects => {
    if (projects.length) {
      res.status(200).json(projects);
    } else {
      res.status(500).json({ msg: "No projects found" });
    }
  });
});

projectRouter.post("/", (req, res) => {
  projects
    .addOne(req.body)
    .then(id => {
      res.status(200).json({ success: `Project created with id: ${id}` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

module.exports = projectRouter;
