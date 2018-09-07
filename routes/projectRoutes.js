const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');
const helpers = require('../data/helpers');

router.get('/', (req, res, next) => {
  helpers
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  helpers
    .getProject(req.params.id)
    .then(project => {
      if (!project) return next(404);
      res.status(200).json(project);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  let body = req.body;
  if (!(body.name && body.description)) return next(404);
  db.insert(body)
    .into('projects')
    .then(id => res.status(200).json(id))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  let body = req.body;
  if (!(body.name && body.description)) return next(404);
  db('projects')
    .where({ id: req.params.id })
    .update(body)
    .then(response => {
      if (!response) return next(404);
      res.status(200).json(response);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  helpers
    .deleteProject(req.params.id)
    .then(data => {
      if (!data) {
        return next({ code: 404 });
      }
      res.status(200).json({ id: req.params.id });
    })
    .catch(err => next(err));
});

module.exports = router;
