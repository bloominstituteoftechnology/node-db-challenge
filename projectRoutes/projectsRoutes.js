const express = require("express");
const db = require("./projectsModels.js");
const router = express.Router();

router
  .route("/projects")
  .get((req, res) => {
    db.getProjects()
      .then(projects => res.status(201).json(projects))
      .catch(err =>
        res.status(500).json({ error: "The project(s) could not be found." })
      );
  })
  .post((req, res) => {
    const project = req.body;
    db.addProject(project)
      .then(newProject => res.status(201).json(newProject))
      .catch(err =>
        res
          .status(500)
          .json({ error: "Project could not be added at this time." })
      );
  });

router.route("/projects/:id").get((req, res) => {
  const { id } = req.params;
  db.getProjectById(id)
    .then(project => {
      if (!project || project < 1)
        return res.status(404).json({
          error: "A project with that ID could not be found at this time."
        });
      return db
        .addActionsToProject(id)
        .then(actions => {
          project.actions = actions;
          res.status(200).json(project);
        })
        .catch(err =>
          res.status(500).json({
            error:
              "An action with that project ID could not be found at this time."
          })
        );
    })
    .catch(err =>
      res.status(500).json({
        error: "The project with the specified ID could not be retrieved."
      })
    );
});

module.exports = router;
