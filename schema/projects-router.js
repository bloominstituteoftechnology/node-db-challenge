const express = require("express");
const Projects = require("./projects-model.js");

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get projects" });
      });
  });

router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to post new project. "})
        })
})

router.get('/:id', (req, res) => {
  Projects.getById(req.params.id)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "Error retrieving project."})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server error."})
    })
})

module.exports = router;