const express = require('express');
const projectRoutes = require('./projects/projectRoutes');

const router = express.Router();

router.use('/projects', projectRoutes);

module.exports = router;