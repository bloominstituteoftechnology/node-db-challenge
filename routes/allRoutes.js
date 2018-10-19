const express = require("express");
const db = knex(knexConfig.development);
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const router = express.Router();

router.route("/projects").post((req, res) => {
  const project = req.body;
  db.insert(project)
    .into("projects")
    .then(newProject => res.status(201).json(newProject))
    .catch(err =>
      res
        .status(500)
        .json({ error: "Project could not be added at this time." })
    );
});

router.route("/actions").post((req, res) => {
  const action = req.body;
  db.insert(action)
    .into("actions")
    .then(newAction => res.status(201).json(newAction))
    .catch(err =>
      res.status(500).json({ error: "Action could not be added at this time." })
    );
});

router.route("/projects/:id").get((req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .then(project => {
      if (!project || project < 1)
        return res
          .status(404)
          .json({
            error: "A project with that ID could not be found at this time."
          });
      return db("actions")
        .select(
          "actions.id",
          "actions.description",
          "actions.notes",
          "actions.completed"
        )
        .where({ project_id: id })
        .then(actions => res.status(200).json([...project, { actions }]))
        .catch(err =>
          res
            .status(500)
            .json({
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
