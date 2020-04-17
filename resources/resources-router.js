const express = require('express');
const Resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.findResources()
    .then(resource => {
      res.status(200).json({data: resource});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.post('/', (req, res) => {
  const post = req.body;

  Resources.addResources(post)
    .then(resource => {
      res.status(201).json({data: resource});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
