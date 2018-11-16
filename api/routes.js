const express = require('express');

const projectRoutes= require('./projectRoutes.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'api' });
})

router.use('/project', projectRoutes)

module.exports = router;
