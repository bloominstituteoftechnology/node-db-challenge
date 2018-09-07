const express = require("express");
const knex = require("knex");

const dbConfig = require("../../knexfile");

const db = knex(dbConfig.development);

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  db("projects")
    .where({ id: req.params.id })
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/:id/actions", (req, res) => {
  db("projects")
    .where({id: req.params.id})
    .innerJoin("actions", "projects.id", "=", "actions.project_id")
    .select([
        'projects.id as projectID',
        'project.name as pName',
        'project.description as pDes',
        'project.completed as pCom',
        knex.raw('ARRAY_AGG(actions) as actions')
    ])
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  const project = req.body;
  if (!project) {
    res.status(400).json({ message: "Please provide a project name." });
  }
  db.insert(project)
    .into("projects")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  db("projects")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "No project with this ID was found." });
      }
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  const project = req.body;
  console.log(project);
  db("projects")
    .where({ id: req.params.id })
    .update(project)
    .then(project => {
      if (project) {
        res.status(200).json({ message: "Update Completed" });
      } else {
        res.status(404).json({ message: "No project with this ID was found." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Update Failed!" });
    });
});

module.exports = router;
