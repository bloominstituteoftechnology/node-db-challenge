const express = require('express')
const router = express.Router()

const db = require('../helpers/db')

// endpoints
router.get('/', (req, res) => {
  db.getProject()
    .then(projects => {
      res
        .status(200)
        .json(projects)
    })
    .catch(() => {
      res
        .status(500)
        .json({message: 'Failed to get projects'})
    })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  db.getProject(id)
    .then(project => {
      if(project) {
        
        db.getAction(id)
          .then(actions => {
            project = project[0]
            project.actions = actions;
            project.project_complete === 0 ?project.project_complete = false : project.project_complete = true;
            actions.forEach(action => {
              action.project_complete === 0 ?action.project_complete = false : action.project_complete = true;
            })
            res
              .status(200)
              .json(project)
          })
        
      } else {
        res
          .status(404)
          .json({message: 'Dish not found under current id'})
      }
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({message: 'Failed to get dish'})
    })
})

module.exports = router;