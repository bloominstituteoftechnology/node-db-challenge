const express = require('express');
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

const router = express.Router();


router.get('/', (req, res) => {
  db('actions').select()
  .then(actions => {
    console.log(actions)
    actions.length === 0 ?
    res.status(200).json({message: 'No Actions Listed, Send a Post request to list an Action'})
    :
    res.status(200).json(actions)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Error')
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('actions').where({ id }).select()
  .then(action => {
    console.log(action)
    action.length === 0 ?
    res.status(400).json({message: 'No Action Listed, check your id'})
    :
    res.status(200).json(action)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Error')
  });
});


router.post('/', (req, res) => {

  !req.body.description || !req.body.notes || !req.body.project_id ?
  res.status(400).json({message: 'You need a valid description AND notes AND project_id'})
  :
  null
  
  const { description, notes, project_id } = req.body;
  const body = { description, notes, project_id }

  db.insert(body).into('actions')
  .then(count => {
    res.status(200).json(count)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json('Error')
  });
})


router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('actions').where({id}).del()
  .then(count => {
    console.log(count);
    count === 0 ?
    res.status(400).json({message: 'Error deleting Action, check your id'})
    :
    res.status(200).json(count)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json('Error')
  });
})


router.put('/:id', (req, res) => {
  const { id } = req.params;

  !req.body.description && !req.body.notes && !req.body.project_id ?
  res.status(400).json({message: 'You need a valid description OR notes OR project_id'})
  :
  null
  
  const { description, notes, project_id } = req.body;
  const body = { description, notes, project_id }


  db('actions').where({id}).update(body)
  .then(count => {
    console.log(count);
    count === 0 ?
    res.status(400).json({message: 'Error updating Action, check your id'})
    :
    res.status(200).json(count)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json('Error')
  });
})


module.exports = router;
