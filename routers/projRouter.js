const express = require('express')

const proj = express.Router()

proj.get('/', (req,res) => {
  res.status(200).send('proj endpoint working')
})

module.exports = proj