const express = require('express');
const router = express.Router();

const projectRoutes = require('./projectRoutes');
const actionRoutes = require('./actionRoutes');

router.use('/projects', projectRoutes);
router.use('/actions', actionRoutes);

module.exports = router;
