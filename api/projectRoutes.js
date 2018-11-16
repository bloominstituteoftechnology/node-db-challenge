// projectsRoutes.js
const express = require('express')
const knex = require('knex')

const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

const router = express.Router();

// const getAllprojects = (req, res) => {
//   db('projects')
//     .then(projects => {
//       res.status(200).json(projects);
//     })
//     .catch(error => {
//       res.status(500).json(error)
//     });
// }

// const getproject = (req, res) => {
//   const { id } = req.params

//   db('projects')
//     .where('id', id)
//     .then(projects => {
//       res.status(200).json(projects);
//     })
//     .catch(error => {
//       res.status(500).json(error)
//     });
// }

// const addproject = (req, res) => {
//   const { name } = req.body
//   console.log(name)

//   db('projects')
//     .insert({ name })
//     .then(projects => {
//       res.status(200).json(projects);
//     })
//     .catch(error => {
//       res.status(500).json(error)
//     });
// }

// const updateproject = (req, res) => {
//   const changes = req.body
//   const { id } = req.params

//   db('projects')
//     .where('id', id)
//     .update(changes)
//     .then(projects => {
//       res.status(200).json(projects);
//     })
//     .catch(error => {
//       res.status(500).json(error)
//     });
// }

// const deleteproject = (req, res) => {
//   const changes = req.body
//   const { id } = req.params

//   db('projects')
//     .where('id', id)
//     .del()
//     .then(projects => {
//       res.status(200).json(projects);
//     })
//     .catch(error => {
//       res.status(500).json(error)
//     });
// }

const echo = (req, res) => {
  res.status(200).json({
    message: 'hey this endpoint work!',
    params: req.params,
    query: (req.query ? req.query : ''),
    body: req.body
  });
}

router.post('/', echo);
router.get('/', echo);

module.exports = router;
