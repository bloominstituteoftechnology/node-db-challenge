const db = require('../../database/dbConfig.js');
const express = require('express');
const router = express.Router();

router.get('/api/test', (req, res) => {
  db.select().from('projects').then(data => res.json(data)).catch(err => console.log(err))
});

// Get all projects
router.get('/api/projects', (req, res, next) => {
  db('projects')
    .then(data => res.status(200).json(data))
    .catch(next)
});

// Get a project by id
router.get('/api/projects/:id', (req, res, next) => {
  const { id } = req.params;

  db.select()
    .from('projects')
    .where({ id })
    .then(projectArr => {

      db.select()
        .from('actions')
        .where('project_id', id)
        .then(actions => {
          const project = projectArr[0];
          res.status(200).json({
            id: project.id,
            name: project.name,
            description: project.description,
            completed: project.completed ? true : false,
            actions: actions.map(action => {
              return {
                id: action.id,
                description: action.description,
                notes: action.notes,
                completed: action.completed ? true : false
              }
            })
          })
        })
        .catch(next)

    })
    .catch(next)







}, (req, res, next) => {
  res.status(500).json({ err });
});

// Add a project
router.post('/api/projects', (req, res, next) => {
  const { name, description, completed } = req.body;
  db.insert({ name, description, completed })
    .into('projects')
    .then(id => res.status(201).json({ id }))
    .catch(next);
}, (req, res, next) => {
  res.status(500).json({ err });
});

// Delete a project
router.delete('/api/projects', (req, res, next) => {
  const { name } = req.body;

  db('projects')
    .where({ name })
    .del()
    .then(id => res.status(201).json({ id }))
    .catch(next)
}, (err, req, res, next) => {
  res.status(500).json({ err });
});

module.exports = router;
