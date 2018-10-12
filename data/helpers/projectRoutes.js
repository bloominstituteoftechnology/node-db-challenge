const express = require('express');

const projects = require('./projectModel.js')

const router = express.Router()

router.get('/', (req,res) => {
  projects.find()
    .then(table => {
      res.status(200).send(table)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
})

// projects.find()
//   .then(project => {
//     console.log('HERE INSIDE!:', project)
//   })
//   .catch()
router.get('/:id', (req,res) => {
  const { id } = req.params
  projects.findById(id)
    .then(project => {
      // console.log('Project:', project);
      res.status(201).json({
        id: project[0].projectId,
        name: project[0].projectName,
        description: project[0].projectDescription,
        completed: project[0].projectCompleted ? true : false,
         actions: project.map(action => ({
           'id': action.actionId,
           'description': action.actionDescription,
           'notes': action.actionNotes,
           'completed': action.actionCompleted ? true : false,
         }))
         // project.map(action => {
         //   // {
         //   action
             // id: action.actionId,
           // description: action.actionDescription,
           // notes: action.actionNotes,
           // completed: action.actionCompleted,}

         // })
       })
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const { name, description } = req.body
  const project = { name, description }
  projects.insert(project)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err.message)
    })
})


module.exports = router;
