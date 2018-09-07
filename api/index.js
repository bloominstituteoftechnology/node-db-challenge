const express = require('express');

//routes
const projectRoutes = require('./projects');
// const actionRoutes = require('./actions');

const router = express.Router();

router.use('/projects', projectRoutes);
// router.use('/actions', actionRoutes);

module.exports = router;
