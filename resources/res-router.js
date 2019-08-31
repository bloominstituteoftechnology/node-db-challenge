// Bring in express router
// --------------------------------------------|
const router = require('express').Router()

// Bring in DB Helper Methods
// --------------------------------------------|
const Resources = require('./res-model.js')

// GET Request - Get all resources from db
// --------------------------------------------|
router.get('/', async (req, res) => {
  try {
    const resources = await Resources.find()

    res.json(resources)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get resources'
    })
  }
})

// GET Request - Get resource from db by id
// --------------------------------------------|
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const resource = await Resources.findById(id)

    if (resource) {
      res.json(resource)
    } else {
      res.status(404).json({
        message: 'Invalid Resource ID'
      })
    }
  } catch {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get resource'
    })
  }
})

// POST Request - Add new resource to db
// --------------------------------------------|
router.post('/', async (req, res) => {
  let newResource = req.body

  try {
    const addedResource = await Resources.add(newResource)

    res.status(201).json(addedResource)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to add resource'
    })
  }
})

// Export Router
// --------------------------------------------|
module.exports = router
