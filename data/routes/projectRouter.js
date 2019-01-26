const express = require("express")
const router = express.Router() 
const projDB = require('../helpers/projectsDB')

router.get('/', (req, res) => {
 projDB.pull()
  .then((projects) => {
   res
    .json(projects)
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error getting projects from DB."})
  })
})

router.get('/:id', (req, res) => {
 const { id } = req.params 
 projDB.pullById
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => [

])

router.delete('/', (req, res) => {

})

module.exports = router 

