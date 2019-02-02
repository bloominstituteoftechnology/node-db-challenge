const db = require('../../database/dbConfig.js');
const express = require('express');
const router = express.Router();

router.get('/api/test', (req, res) => {
  db.select().from('projects').then(data => res.json(data)).catch(err => console.log(err))
});

router.post('/api/projects', (req, res, next) => {
  const { name, description, completed } = req.body;
  db.insert({ name, description, completed })
    .into('projects')
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

router.delete('/api/projects', (req, res, next) => {
  const { name } = req.body;

  db('projects')
    .where('name', name)
    .del()
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

module.exports = router;
