const express = require("express");

const projects = require("./projectsModel.js");
const actions = require("../actions/actionsModel.js");

const router = express.Router();

//=============== PROJECT ENDPOINTS =============== //

// get a list of projects
router.get("/", (req, res) => {
  projects
    .find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

//get a project by its ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projects.findById(id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get actions of a specific project
router.get("/:id/actions", (req, res) => {
  actions
    .findActionByProject(req.params.id)
    .then(action => {
      if (action.length > 0) {
        res.json(action);
      } else
        res.status(404).json({
          message: "The action with the specified project ID does not exist."
        });
    })
    .catch(err =>
      res.status(500).json({
        error: "The action information could not be retrieved."
      })
    );
});

// Add a project
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const project = { name, description };

  if (!name || !description) {
    return res.status(400).json({
      error: "Please provide a name and a description for your project."
    });
  }
  projects
    .add(project)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// update a project
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  projects
    .update(id, changes)
    .then(project => {
      if (!project) {
        res.status(404).json({ message: "No project found to update" });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => res.status(500).json(err));
});

// delete a project
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  projects
    .remove(id)
    .then(project => {
      if (!project) {
        res.status(404).json({ message: "No projects found to delete" });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
