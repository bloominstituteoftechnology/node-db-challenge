const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Projects = require("./projects-model");

router.get("/", (req, res) => {
  Projects.getProjects().then(recipes => {
    res.json(recipes);
  });
});

router.get("/:id", (req, res) => {
  Projects.getProjects(req.params.id).then(recipes => {
    res.json(recipes);
  });
});

router.post("/", (req, res) => {
  Projects.insert(req.body).then(project => {
    res.status(201).json(project);
  });
});

router.post("/:id/resources", (req, res) => {
  Projects.insertResource(req.body.resourceId, req.params.id).then(resource => {
    Projects.getResources(resource).then(response => {
      res.status(201).json(response);
    });
    // res.status(201).json(resource), console.log(resource)
  });
});
module.exports = router;