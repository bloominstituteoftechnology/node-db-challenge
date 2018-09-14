const express = require("express");
const knex = require("knex");
const dbConfig = require("../knexfile");
const db = knex(dbConfig.development);
const router = express.Router();

// GET
router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "The projects could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ project_id: id })
    .then(project => {
      if (project.length === 0) {
        res.status(404).json({
          message: "The project with the specified ID does not exist.",
        });
      } else {
        return res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The project could not be retrieved." });
    });
});
// end GET

// POST
router.post("/", (req, res) => {
  const project = req.body;
  if (!project) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the project.",
    });
  } else {
    db("projects")
      .insert(project)
      .into("projects")
      .then(projects => {
        res.status(201).json({ message: "Project successfully added." });
      })
      .catch(err => {
        res.status(500).json({ error: "The project could not be added." });
      });
  }
});
// end POST

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where("project_id", id)
    .del()
    .then(projects => {
      if (projects === 0) {
        res.status(404).json({
          message: "The project with the specified ID does not exist.",
        });
      } else {
        res.status(200).json({ message: "Project removed successfully." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The project could not be removed." });
    });
});
// end DELETE

// PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedProject = req.body;
  if (!updatedProject) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the project.",
    });
  } else {
    db("projects")
      .where("project_id", id)
      .update({
        project_name: updatedProject.project_name,
        project_description: updatedProject.project_description,
        project_completed: updatedProject.project_completed,
      })
      .then(projects => {
        res.status(200).json({ message: "Project successfully modified." });
      })
      .catch(err => {
        res.status(500).json({ error: "The project could not be updated." });
      });
  }
});
// end PUT

// NESTED GET
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ project_id: id })
    .then(project => {
      if (project.length === 0) {
        res.status(404).json({
          message: "The project with the specified ID does not exist.",
        });
      } else {
        db("actions")
          .where({ project_id: id })
          .then(action => {
            if (action.length === 0) {
              res.status(404).json({
                message: "The action with the specified ID does not exist.",
              });
            } else {
              return res
                .status(200)
                .json(Object.assign(project[0], { actions: action }));
            }
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: "The actions could not be retrieved." });
          });
      }
    });
});
// end NESTED GET

module.exports = router;