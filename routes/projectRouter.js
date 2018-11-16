
const router = require('express').Router();
const project = require('../controllers/projectController.js');


router.post('/project', project.addProject)
router.post('/action', project.addAction)


router.get('/:id', dish.getProject)



module.exports = router