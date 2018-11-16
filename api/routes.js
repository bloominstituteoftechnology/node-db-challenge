const express = require('express');

const projectRoutes = require('./projectRoutes.js');
const actionRoutes = require('./actionRoutes.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'api' });
})

router.use('/project', projectRoutes)
router.use('/action', actionRoutes)

module.exports = router;
