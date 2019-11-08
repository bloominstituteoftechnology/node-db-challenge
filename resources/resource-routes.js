const express = require('express');

const resources = require('./resource-model');

const router = express.Router();

router.get('/', (req, res) => {
    resources.find()
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/', (req, res) => {
    const resourceData = req.body;
  
    resources.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   projects.findById(id)
//   .then(project => {
//     if (project) {
//       res.json(project);
//     } else {
//       res.status(404).json({ message: 'Could not find resource with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get resource' });
//   });
// });

module.exports = router;