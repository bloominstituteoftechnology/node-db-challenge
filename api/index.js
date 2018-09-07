const router = require('express').Router();

router.use('/projects', require('./projects'));
router.use('/actions', require('./actions'));
router.use('/contexts', require('./contexts'));

module.exports = router;
