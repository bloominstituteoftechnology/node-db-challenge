const express = require('express');

const projects = require('./projects');
const actions = require('./actions');

const router = express.Router();

router.use('/projects', projects);
router.use('/actions', actions);

module.exports = router; 