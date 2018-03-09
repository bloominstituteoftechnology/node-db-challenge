const express = require('express');
const router = express.Router();

const project = require('./projectsController');

router.route('/').post(project.create);

module.exports = router;
