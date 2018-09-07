const router = require('express').Router();
const db = require('knex')(require('../knexfile').development);

router.get('/', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('projects').where({ id })
    .then(project => {
      db('actions').where({ 'project_id': id })
        .then(actions => {
          res.status(200).json(Object.assign(project[0], { actions }));
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {});

module.exports = router; 
