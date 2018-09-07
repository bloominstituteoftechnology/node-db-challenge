const router = require('express').Router();
const db = require('knex')(require('../knexfile').development);

router.get('/', (req, res) => {
  db('contexts')
    .then(contexts => res.status(200).json(contexts))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('contexts as c')
    .where({ 'c.id': id })
    .select('c.id', 'description', 'action_id')
    .join('contexts-to-actions', { 'context_id': 'c.id' })
    .then(context => {
      if (!(context.length === 0)) res.status(200).json(context[0]);
      else res.status(404).json({ error: 'The context with the specified ID wasn\'t found.' })
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  db('contexts')
    .insert(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('contexts')
    .where({ id })
    .del()
    .then(count => {
      if (count) res.status(200).json(count);
      else res.status(404).json({ error: 'The context with the specified ID wasn\'t found.' });
    })
    .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  db('contexts')
    .where({ id })
    .update(req.body)
    .then(count => {
      if (count) res.status(200).json(count);
      else res.status(404).json({ error: 'The context with the specified ID wasn\'t found.' });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
