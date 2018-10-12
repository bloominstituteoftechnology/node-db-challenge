const express = require('express');

const projects = require('./projectsModel.js');

const router = express.Router();

router.post('/', (req, res) => {
    const project = req.body;
    projects
      .add(project)
      .then(response => {
        res.status(201).json(response);
        // res.status(201).json(response[0]);
      })
      .catch(err => {
        res.status(500).json(err.message);
      });
});

router.get('/', (req, res) => {
    projects
        .find()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    projects
        .findById(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

module.exports = router;