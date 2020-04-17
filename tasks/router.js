const express = require('express');
const Tasks = require('./task-model');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.findTasks()
    .then(task => {
      res.status(200).json({data: task});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
