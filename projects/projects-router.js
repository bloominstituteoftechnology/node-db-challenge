const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
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

router.post("/", (req, res) => {
  const projectBody = req.body;
  // console.log(resourceBody, "taskData tasks-router line 37");

  Projects.add(projectBody)
    .then(createProject => {
      // console.log(createProject, "task line 40");
      res.status(201).json({ message: "New task created!", createProject });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.delete("/:id", validateId, (req, res) => {
  const id = req.params.id;

  Projects.getProjectById(id)
    .then(deleteProject => {
      Projects.remove(id)
        .then(deleted => {
          res.status(200).json({
            message: `The project with id: ${id} was deleted`,
            deleteProject
          });
        })
        .catch(() => {
          res
            .status(500)
            .json({ message: "There was an error deleting the project" });
        });
    })
    .catch(() => {
      res.status(500).json({
        message: "Deleting the project...Something went wrong, try again!"
      });
    });
});

// custom middleware-----------------------------

// Validate ID
function validateId(req, res, next) {
  const id = req.params.id;
  Projects.getProjectById(id)
    .then(id => {
      console.log(id, "id line 84");
      req.project = id;
    })
    .catch(() => {
      res.status(400).json({ message: "invalid project id" });
    });
  next();
}

module.exports = router;
