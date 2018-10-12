const express = require('express');

const projects = require('./projectsModel');

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  projects
    .findById(id)
    .then((project) => {
      if (!project) {
        return res
          .status(404)
          .json({ message: `Project with id #${id} could not be found.` });
      }
      projects.findProjectActions(id).then((actions) => {
        project.actions = actions;
        res.status(200).json(project);
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
