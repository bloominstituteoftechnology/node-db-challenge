const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const router = express.Router();

// read all projects
router.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// read projects by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        db('actions')
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          })
          .catch(err => {
            res.status(500).json(err);
          })
      } else {
        res.status(404).json({ message: 'project not found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// read projects by id (async try catch)
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const project = await db('projects')
//       .where({ id })
//       .first();

//     if (project) {
//       const actions = await db('actions')
//         .where({ project_id: id });
//         project.actions = actions;

//         // or one line it
//         // project.actions = await db('actions').where({ project_id: id });

//         res.status(200).json(project);
//     } else {
//       res.status(404).json({ message: 'project not found' });
//     }
//   } catch (err) {
//     res.json(err); 
//   }
// });

// get all actions by project
router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ project_id: id })
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// create projects
router.post('/', (req, res) => {
  const project = req.body;
  db.insert(project)
    .into('projects')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// update projects
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newProject = req.body;
  db('projects')
    .where({ id })
    .update(newProject)
    .then(project => {
      if (!project || project < 1) {
        res.status(404).json({ message: 'No records found to update' });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// delete projects
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .del()
    .then(project => {
      if (!project || project < 1) {
        res.status(404).json({ message: 'No records found to delete' });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;