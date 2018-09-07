const express = require('express')
const API = require('./db/api')
const server = express()
 
server.use(express.json())

server.get('/project/:id', async (req, res) => {
  const id = req.params.id
  const getProjectAndItsActions = await API.getProjectAndItsActions(id)
  res.status(200).json(getProjectAndItsActions)
})

server.get('/testing/:id', async (req, res) => {
  const id = req.params.id
  await API.toggleAction(id)
  res.status(200).json({ message: `Action ${id} is updated` })
})

server.listen('3300', () => {
  console.log(`\n=== Web API Listening on http://localhost:3300 ===\n`)
})