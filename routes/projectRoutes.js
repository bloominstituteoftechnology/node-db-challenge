const express = require("express");
const projects = require("../helpers/projectsDB");
const router = express.Router();

router.get("/", (req, res) => {
    projects
      .getProjects()
      .then(project => {
        if (project.length === 0) {
          res
            .status(404)
            .json({
              message: "The project with the specified ID does not exist"
            });
        } else {
          res.status(200).json(project);
        }
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error fetching data" });
      });
  });
  
  router.get("/:id", (req, res) => {
    projects
      .getProjects(req.params.id)
      .then(project => {
        if (project.length === 0) {
          res
            .status(404)
            .json({
              message: "The project with the specified ID does not exist"
            });
        } else {
          res.status(200).json(project);
        }
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error fetching data" });
      });
  });
  
  router.post("/", (req, res) => {
    projects
      .addProject(req.body)
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error updating data" });
      });
  });
  
  router.put("/:id", (req, res) => {
    projects
      .editProject(req.params.id, req.body)
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error updating data" });
      });
  });
  
  router.delete("/:id", (req, res) => {
    projects
      .deleteProject(req.params.id)
      .then(project => {
        res.status(200).json(project);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error deleting data" });
      });
  });

  module.exports = router;
  