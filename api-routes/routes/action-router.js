const express = require('express')

const db = require('../../data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('actions')
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).send('error fetching actions...')
    console.log(error.message)
  })
})

router.get('/:id', (req, res) => {
  db('actions')
  .where('id', Number(req.params.id)).first()
  .then(response => {
  res.status(200).json(response);
  })
  .catch(error => {
    res.status(404).send('error fetching individual action...')
    console.log(error.message)
  })
})


router.post('/', (req, res) => {
  let { description, notes, completed, project_id } = req.body;
  let action = {
    description,
    notes,
    completed,
    project_id
  }
  db('actions')
  .insert(action)
  .then(ids => ({ id: ids[0] }),
  res.status(200).json(req.body))
    .catch(error => {
      res.status(404).send('error adding action...')
      console.log(error.message)
    })
  })

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  db('actions')
  .where('id', id)
  .del()
  .then(response => {
    res.status(200).json('the action was deleted successfully');
  })
  .catch(error => {
    console.log(error.message)
    res.status(404).send("the action could not be removed")
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let { description, notes, completed, project_id } = req.body;
  let changes = {
    description,
    notes,
    completed,
    project_id
  }
  db('actions')
  .where('id', id)
  .update(changes)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    console.log(error.message)
    res.status(500).send('Unable to update the action...')
  })
})

module.exports = router;
