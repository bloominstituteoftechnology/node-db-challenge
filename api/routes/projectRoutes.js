const express = require("express");
const projectDb = require("../../data/helpers/projectDb.js");
const router = express.Router();

router.get("/", (req, res) => {
  projectDb
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => res.send({ error: "The projects could not be retrieved." }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDb
    .get(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ error: "The project couldn't be retrieved" });
    });
});

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  projectDb
    .getProjectActions(id)
    .then(actions => {
      if (actions) {
        res.status(200).json(actions);
      } else {
        res.status(404).json({
          message: "There are not currently any actions set to this project."
        });
      }
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ error: "The actions couldn't be retrieved" });
    });
});

router.post("/", async (req, res) => {
  if (!req.body.description || !req.body.name) {
    return res.status(400).json({ message: "Add a name AND description." });
  }
  try {
    let data = await projectDb.insert(req.body);
    return res.status(201).json({
      id: data.id,
      project_id: data.project_id,
      name: req.body.name,
      description: req.body.description,
      completed: false
    });
  } catch (err) {
    res.status(500).json({
      error: "There was an error while saving the project to the database"
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projectDb.get(id).then(project => {
    if (!project) {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    } else {
      projectDb
        .remove(id)
        .then(project => {
          res.status(200).json({ message: "project was successfully deleted" });
        })
        .catch(err => {
          console.log("Error: ", err);
          res.status(500).json({
            error:
              "The internet is a permanent and scary place. Request denied."
          });
        });
    }
  });
});

//updates the user and returns the updated user object
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { description, name, completed, project_id } = req.body;
  const project = { description, name, completed, project_id };

  if (!req.body.description || !req.body.name) {
    return res
      .status(400)
      .json({ message: "You at least need a description and a note." });
  } else {
    projectDb.get(id).then(project => {
      if (!project) {
        return res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      }
    });
  }

  projectDb
    .update(id, project)
    .then(res.status(200))
    .catch(err => {
      res.status(500).json({ error: "Didn't work, don't know why." });
    });

  projectDb.get(id).then(project => {
    if (project) {
      res.status(200).json(project);
    }
  });
});

module.exports = router;
