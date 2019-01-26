const express = require("express")
const router = express.Router() 
const actsDB = require('../helpers/actionsDB')

router.get('/', (req, res) => {
 actsDB.pull()
  .then((actions) => {
   res
    .json(actions)
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error getting actions."})
  })
})

router.get('/:id', (req, res) => {
 const { id } = req.params
 actsDB.pullById(id)
  .then((action) => {
   res
    .json(action)
  })
  .catch(() => {
   res
    .json({error: "There was an error getting action."})
  })
})

router.post('/', (req, res) => {
 const action = req.body
 if (action.notes && action.description) {
   actsDB.place(action)
    .then(() => {
     res
      .status(201)
      .json(action)
    })
    .catch(() => {
     res
      .status(500)
      .json({error: "There was an error adding action to DB."})
    })
  }
  else {
   res
    .status(400)
    .json({error: "Notes and description required to add action to DB."})
  }
})

router.put('/:id', (req, res) => {
 actsDB.alter(id, project)
  .then(() => {

  })
  .catch(() => {

  })
})

router.delete('/:id', (req, res) => {
 actsDB.clear(id)
  .then(() => {

  })
  .catch(() => {

  })
})

module.exports = router 