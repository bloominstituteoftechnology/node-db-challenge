const express = require('express');

const projectRoutes = require('./projectRoutes');
const actionRoutes = require('./actionRoutes');

const router = express.Router();

router.use('/projects', projectRoutes);
router.use('/actions', actionRoutes)

module.exports = router; 