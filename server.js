const express  = require('express')
const morgan   = require('morgan')
const projects = require('./routers/projects')
const actions  = require('./routers/actions')

const server = express()

server.use(morgan('tiny'))
server.use(express.json())

server.use('/projects', projects)
server.use('/actions', actions)

server.use((req, res) => {
  res.status(400).send('invalid route 😢')
})

server.listen(3333, () => console.log('💰💵💸: 3333'))
