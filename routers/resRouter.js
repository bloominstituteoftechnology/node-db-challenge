const express = require('express');

const resources = require('../helpers/resModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  resources.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  resources.findById(id)
  .then(resource => {
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Could not find resource with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    resources.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find resource with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete resource' });
    });
  });

  module.exports = router;