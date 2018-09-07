const express = require('express')
const API = require('./db/api')
const server = express()
 
server.use(express.json())

server.get('/project/:id', async (req, res) => {
  const id = req.params.id
  const getProjectAndItsActions = await API.getProjectAndItsActions(id)
  res.status(200).json(getProjectAndItsActions)
})

server.listen('3300', () => {
  console.log(`\n=== Web API Listening on http://localhost:3300 ===\n`)
})