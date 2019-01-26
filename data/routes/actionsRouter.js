const express = require("express")
const router = express.Router() 
const actsDB = require('../helpers/actionsDB')

router.get('/', (req, res) => {
 actsDB.pull()
  .then(() => {

  })
  .catch(() => {

  })
})

router.get('/:id', (req, res) => {
 actsDB.pullById(id)
  .then(() => {

  })
  .catch(() => {

  })
})

router.post('/', (req, res) => {
 const action = req.body
 if (action.name && action.description) {
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
    .json({error: "Name and description required to add action to DB."})
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