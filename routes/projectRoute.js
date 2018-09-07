const express = require('express')
const router = express.Router()
const projectControler = require('../controllers/index')

router.route('/')
    .get(projectControler.get)
    .post(projectControler.post)

router.route('/:id')
    .get(projectControler.getProjectID)
    .put(projectControler.update)
    .delete(projectControler.del)

module.exports = router