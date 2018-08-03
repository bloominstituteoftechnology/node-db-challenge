const express = require('express')

const act = express.Router()

act.get('/', (req,res) => {
  res.status(200).send('act endpoint working')
})

module.exports = act