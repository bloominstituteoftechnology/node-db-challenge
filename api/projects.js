const express = require('express')
const db = require('../data/helpers/projectHelpers');

const router = express.Router();

//endpoints
//get all projects
router.get('/', (req, res) => {
  db.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

//get a project by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.get(id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err));
});

//add a new project
router.post('/', (req, res) => {
  db
    .insert(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

//update a project with id
router.put('/:id', (req, res) => {
  const { id } = req.params;

  db
    .update(id, req.body)
    .then(updated => updated === 1 ?
                  res.status(200).json(updated) :
                  res.status(404).json({ message: "Record not found" })
    )
    .catch(err => res.status(500).json(err));
});

//delete a project with id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .remove(id)
    .then(deleted => deleted === 1 ?
                  res.status(200).json(deleted) :
                  res.status(404).json({ message: "Record not found" })
    )
    .catch(err => res.status(500).json(err));
});

module.exports = router;
