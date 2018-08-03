const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')

const PORT = 4040

const server = express()

server.use(express.json())
server.use(logger('dev'))
server.use(helmet())

server.get('/', (req, res) => {
  res.status(200).send('Server Listens and Obeys')
})

server.listen(PORT, () => {
  return console.log(`\n=== Server Online and Running on PORT ${PORT}.===\n=== Keep Coding Strong ===\n`)
})
