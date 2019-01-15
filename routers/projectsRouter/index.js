const express = require("express");
const DB = require("../../data/helpers");
const router = express.Router();

// ADD A NEW PROJECT TO THE DB
router.post("/", (req, res) => {
  const { project } = req.body;
  // check if project name and description are present
  if (project.name.length && project.description.length) {
    DB.addProject(project)
      .then(result => {
        // check if our result is truthy
        if (result.length) {
          const id = result[0];

          DB.getProject(id).then(newProject => {
            // check if newProject is truthy
            if (newProject.length) {
              res.status(201).json({ newProject });
            } else {
              res
                .status(400)
                .json({ error: "Please retry creating this project." });
            }
          });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "error code: NOADDPJ" });
      });
  } else {
    res.status(401).json({
      error:
        "Please input information in the name and description fields of the new project to create."
    });
  }
});

// GET A PROJECT BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  // get project from database using data/helpers
  DB.getProject(id)
    .then(result => {
      result = result[0];
      // check if falsy, return error for bad ID
      if (!result) {
        res.status(404).json({ error: "This project does not exist" });
      } else {
        DB.getActions(id).then(actions => {
          const project = Object.assign({}, result, { actions: actions });
          res.json({ project });
        });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NOGTPROJID" });
    });
});

// DELETE A PROJECT BASED ON ID
router.delete("/:id", (req, res) => {
  // add project name from front-end to delete
  const { name } = req.body;
  const { id } = req.params;
  DB.getProject(id).then(project => {
    DB.getActions(id).then(actions => {
      // check if user matched names to be deleted
      if (name === project[0].name) {
        // search for and delete project itself
        DB.deleteProject(id, name)
          .then(deletedProject => {
            // then search for and delete all actions related to project
            DB.deleteActionsForDeletedProject(id)
              .then(deletedActions => {
                const finalProject = Object.assign({}, project, { actions });
                // return info that shows what was deleted
                res.json({ finalProject, deletedActions, deletedProject });
              })
              .catch(err => {
                res.status(500).json({ error: "error code: NODELIDACT" });
              });
          })
          .catch(err => {
            res.status(500).json({ error: "error code: NODELIDPROJ" });
          });
      } else {
        res.status(401).json({
          error: "Please enter the correct name of the project to delete"
        });
      }
    });
  });
});

// UPDATE A PROJECT BY ID
router.put("/:id", (req, res) => {
  const { project } = req.body;
  const { id } = req.params;
  // check if something is in project
  if (project.length) {
    DB.updateProject(id, project)
      .then(result => {
        res.json({ result });
      })
      .catch(err => {
        res.status(500).json({ error: "error code: NOUPDPROJ" });
      });
  } else {
    res
      .status(401)
      .json({ error: "Please enter some data to update project." });
  }
});

module.exports = router;
