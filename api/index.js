const router = require('express').Router();

router.use('/projects', require('./projects'));
router.use('/actions', require('./actions'));

module.exports = router;
