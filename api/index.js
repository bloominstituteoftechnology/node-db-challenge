const express = require('express');
const router = express.Router();
const actionsRouter = require('./actions/index.js');
const projectsRouter = require('./projects/index.js');

router.use(actionsRouter);
router.use(projectsRouter);

module.exports = router;
