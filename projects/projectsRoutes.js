const express = require('express');

const projects = require('./projectsModel.js');

const router = express.Router();

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

router.post('/', (req, res) => {
    const project = req.body;
    projects
      .add(project)
      .then(response => {
        res.status(201).json(response[0]);
        // res.status(201).json(response[0]);
      })
      .catch(err => {
        res.status(500).json(err.message);
      });
});

module.exports = router;