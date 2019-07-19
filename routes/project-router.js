const express = require('express');

const { Projects } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const project = await Projects.getProjects();
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Projects could not be retrieved' })
  }
});

module.exports = router;