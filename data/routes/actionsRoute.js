const express = require('express')
const router = express.Router()

const db = require('../helpers/db')

// endpoints
router.post('/', async (req, res) => {
  const action = req.body;
  if (action.action_description && action.project_id) {
      db.getProject()
      .then(projects => {
        projects.forEach(project => {
          if(project.id === action.project_id){
            db.addAction(action)
              .then(id => {
                res
                  .status(201)
                  .json(id)
              })
              .catch(err => {
                res
                  .status(500)
                  .json({message: 'no project under current project_id'})
              })
          } else {
            res
              .status(404)
              .json({message: 'No project under that project_id'})
          }
        })
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

//   } else {
//     res
//       .status(404)
//       .json({message: 'No project under current project_id'})
//   }
// })

module.exports = router;
