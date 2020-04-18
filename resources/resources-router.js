const express = require('express');

const resources = require('./resources-model.js');

const router = express.Router();

//  retrieving a list of resources.
router.get('/', (req, res) => {
  resources.findResources()
    .then((resourcesList) => {
      res.status(200).json(resourcesList);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to get resourcesList' });
    });
});

// returns a resource with a specific id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  resources.findResourceById(id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: 'problem with the db', error: err });
    });
});

//  adding resources.
router.post('/', (req, res) => {
  const resourceData = req.body;

  resources.addResources(resourceData)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});


module.exports = router;
