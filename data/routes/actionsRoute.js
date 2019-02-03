const express = require('express')
const router = express.Router()

const db = require('../helpers/db')

// endpoints
router.post('/', async (req, res) => {
  const action = req.body;
  if (action.action_description && action.project_id) {
      db.getProject(action.project_id)
      .then(project => {
          if(project[0]) {
            db.addAction(action)
              .then(id => {
                res
                  .status(201)
                  .json(id)
              })
              .catch(err => {
                res
                  .status(500)
                  .json({message: 'failed to add action'})
              })
          } else {
            res
              .status(500)
              .json({message: 'No project under that project_id'})
          }
        })
      .catch(err => {
        res
          .status(500)
          .json({message: 'failed to check projects'})
      })
  } else {
      res
      .status(400)
      .json({ message: 'Please provide action description/project_id' });
  }
})

// projects.forEach(project => {
//   if(project.id === action.project_id) {
//     db.addAction(action)
//       .then(id => {
//         res
//           .status(201)
//           .json(id)
//       })
//       .catch(() => {
//         res
//           .json({message: 'Failed to add action.'})
//     })
//   } else {
//     res
//       .status(404)
//       .json({message: 'No project under current project_id'})
//   }
// })

module.exports = router;
