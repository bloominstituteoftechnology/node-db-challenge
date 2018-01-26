const express = require('express');
const Router = express.Router();
const posts = require('./controller');

Router.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  posts.getProjects(id)
    .then(post => {
      if (!post) res.status(422).json({ error: 'Post not found' });
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

module.exports = Router;