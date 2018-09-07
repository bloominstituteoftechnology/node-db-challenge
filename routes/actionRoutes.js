const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');
const helpers = require('../data/helpers');

router.get('/', (req, res, next) => {
  helpers
    .getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(next);
});

router.get('/:projId', (req, res, next) => {
  helpers
    .getActionsByProject(req.params.projId)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  let body = req.body;
  if (!(body.notes && body.description && body.project_id)) return next(404);
  db.insert(body)
    .into('actions')
    .then(id => res.status(200).json(id))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  let body = req.body;
  if (!(body.name && body.description && body.project_id)) return next(404);
  db('actions')
    .where({ id: req.params.id })
    .update(body)
    .then(response => {
      if (!response) return next(404);
      res.status(200).json(response);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  db('actions')
    .where({ id: req.params.id })
    .del()
    .then(data => {
      if (!data) return next({ code: 404 });
      res.status(200).json({ id: req.params.id });
    })
    .catch(next);
});

module.exports = router;
