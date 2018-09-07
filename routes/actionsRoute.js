const express = require('express')
const router = express.Router()
const actionControler = require('../controllers/index')

router.route('/')
    .get(actionControler.get)
    .post(actionControler.post)

router.route('/:id')
    .get(actionControler.getActionID)
    .put(actionControler.update)
    .delete(actionControler.del)

module.exports = router