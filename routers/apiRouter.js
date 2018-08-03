const express = require('express')
const act = require('./actRouter')
const proj = require('./projRouter')

const api = express.Router()

api.get('/', (req,res) => {
  res.status(200).send('API Working')
})

api.use('/act', act)
api.use('/proj', proj)

module.exports = api