const express = require("express");
const projectRouter = express.Router();

const db = require("../db/dbConfig");

//middleware
const bodyChecker = require("../db/middleware/projectBodyChecker.js");
//middleware^^^

projectRouter.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ error, message: error.message });
    });
});
projectRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(404).json({
        error,
        message: error.message,
        devMessage: "Likely the id does not exist in the projects table"
      });
    });
});

projectRouter.post("/", bodyChecker, (req, res) => {
  db("projects")
    .insert(req.body)
    .then(projectId => {
      res.status(201).json(projectId);
    })
    .catch(error => {
      res.status(500).json({
        error,
        errorMessage: error.message,
        devMessage: "Something may be wrong with the route"
      });
    });
});

projectRouter.put("/:id", bodyChecker, (req, res) => {
  const { id } = req.params; 
  db("projects")
    .update(req.body)
    .where({ id })
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({
        error,
        errorMessage: error.message,
        devMessage: "Something may be wrong with the route"
      });
    });
});

projectRouter.delete("/:id", (req, res) => {
  const { id } = req.params; 
  db("projects")
   .where({ id })
   .del()
   .then(count => {
     res.status(200).json(count)
   })
   .catch(error => {
     res.status(500).json({error, errorMessage: [error.code, error.message], devMessage: "Make sure id exists in projects table also check route"})
   })
})

module.exports = projectRouter;
