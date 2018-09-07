const router = require('express').Router();

router.use('/projects', require('./projects'));

module.exports = router;
