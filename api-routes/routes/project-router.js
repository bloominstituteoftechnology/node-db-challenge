const express = require('express')

const db = require('../../data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('projects')
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(404).send('error fetching projects...')
    console.log(error.message)
  })
})

router.get('/:id', (req, res) => {
  db('projects')
  .where('id', Number(req.params.id)).first()
  .then(response => {
  res.status(200).json(response);
  })
  .catch(error => {
    res.status(404).send('error fetching individual project...')
    console.log(error.message)
  })
})

router.get('/:id/actions', (req, res) => {
  let { id } = req.params
  db('actions as a')
  .join('projects as p', 'p.id', 'a.project_id')
  .select('a.id', 'a.description', 'a.notes', 'a.completed')
  .where('a.project_id', id)
  .then(response => {
  res.status(200).json(response);
  })
  .catch(error => {
    res.status(404).send('error fetching individual project...')
    console.log(error.message)
  })
})


router.post('/', (req, res) => {
  let { name, description, completed } = req.body;
  let project = {
    name,
    description,
    completed
  }
  db('projects')
  .insert(project)
  .then(ids => ({ id: ids[0] }),
  res.status(200).json(project))
    .catch(error => {
      res.status(500).send('error adding project...')
      console.log(error.message)
    })
  })

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  db('projects')
  .where('id', id)
  .del()
  .then(response => {
    res.status(200).json('The project was deleted successfully');
  })
  .catch(error => {
    console.log(error.message)
    res.status(404).send("the project could not be removed")
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let { name, description, completed } = req.body;
  let changes = {
    name,
    description,
    completed
  }
  db('projects')
  .where('id', id)
  .update(changes)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    console.log(error.message)
    res.status(500).send('Unable to update the project...')
  })
})

module.exports = router;
