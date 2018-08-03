const express = require('express');
const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const router = express.Router();

router.use('/projects', projectRoutes);
router.use('/actions', actionRoutes);

module.exports = router;