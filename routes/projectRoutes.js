const express = require('express');
const router = express.Router();
const projects = require('./projectModel');

router.get('/:id', (req, res) => { // view one project based off id and related actions
  const { id } = req.params;

  projects.findById(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'ERROR: Project not found.' });
      }
    })
    .catch(err => res.json(err));
})

router.post('/', (req, res) => { // add project to db 'projects'
  const project = req.body;
  if (!req.body.name) {
    return res.status(400).json({ message: `ERROR: You must provide a name to submit a project.` });
  }
  projects.add(project)
    .then(([newProject]) => {
      res.status(201).json(newProject);
    })
    .catch(err => {
      if (err.errno = 19) {
        res.status(500).json({ message: `ERROR: Unique "name" required.` });
      } else {
        res.status(500).json(err);
      }
    });
});

router.put('/:id', (req, res) => { // edit project by id parameter
  const { id } = req.params;
  const changes = req.body;
  projects.update(id, changes)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to update.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => { // delete project by id parameter
  const { id } = req.params;
  projects.remove(id)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to delete.' });
      } else {
        res.status(200).json(count);
      };
    });
});

module.exports = router;