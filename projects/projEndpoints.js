const express = require('express');
const projects = require('./projController');
const projRouter = express.Router();

projRouter.post('/', (req, res) => {
  const project = req.body;

  projects
    .insert(project)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

projRouter.get('/', (req, res) => {
  projects
    .get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ error });
    });
})

// get project by id
// Build an endpoint to retrieve a project by its id that returns an object with the following structure:
// {
//   id: 1,
//   name: 'project name here',
//   desctiption: 'the project description',
//   completed: false, // or true
//   actions: [
//     {
//       id: 1,
//       description: 'action description',
//       notes: 'the action notes',
//       completed: false // or true
//     },
//     {
//       id: 7,
//       description: 'another action description',
//       notes: 'the action notes',
//       completed: false // or true
//     }
//   ],
//   contexts: [
//     { id: 1, context: 'the context' }
//     { id: 5, context: 'another context' }
//   ]
// }

projRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  projects
    .update(id, req.body)
    .then((count) => {
      count > 0 ? res.status(200).json({ updated: count }) :
                  res.status(404).json(null);
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
})

projRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  projects
    .remove(id)
    .then((count) => {
      res.status(200).json({ count })
    })
    .catch((error) => {
      res.status(500).json( { error });
    });
})

module.exports = projRouter;