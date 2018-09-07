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
      if (project.length === 0) {
        res.status(404).json({ error: 'The project with the specified ID wasn\'t found.' });
      } else {
        db('actions').where({ 'project_id': id })
          .then(actions => {
            res.status(200).json(Object.assign(project[0], { actions }));
          })
          .catch(err => res.status(500).json(err));
      }
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  db('projects').insert(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .del()
    .then(count => {
      if (count) res.status(200).json(count);
      else res.status(404).json({ error: 'The project with the specified ID wasn\'t found.' });
    })
    .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  db('project')
    .where({ id })
    .update(req.body)
    .then(count => {
      if (count) res.status(200).json(count);
      else res.status(404).json({ error: 'The project with the specified ID wasn\'t found.' });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router; 
