const express = require("express");
const projectsRouter = express.Router();
const db = require("../data/db");

projectsRouter.get("/", (req, res) => {
  db("projects")
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => res.status(500).json(err.message));
});

module.exports = projectsRouter;
