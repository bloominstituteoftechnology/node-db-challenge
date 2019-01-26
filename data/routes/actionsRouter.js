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

})

router.put('/:id', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router 