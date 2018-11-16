const express = require('express');

const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

const router = express.Router();

router.post('/', (req, res) => {
    const project = req.body;
  
    db('projects')
      .insert(project)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => {
        res.status(500).json({ message: 'Error creating project', err });
      });
  });

  router.get('/', (req, res) => {
    db('projects')
      .then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json({ message: 'could not get students', err }));
  });

  router.get("/:id", async (req, res) => {
    try {
      const projects = await db("projects")
        .where({
          "projects.id": req.params.id
        })
        .first();
      const actions = await db("actions").where({
        "actions.project_id": req.params.id
      });
      projects
        ? res.status(200).json({ ...projects, actions })
        : res.status(404).json({
            message: "The project with the specified id does not exist."
          });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;