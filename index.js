const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const projectRouter = require('./routes/projectsRoutes.js')
const server = express()


server.use(helmet())
server.use(cors())
server.use(morgan('short'))
server.use(express.json())

//Routes
const projects = '/api/projects'
const actions = '/api/actions'

server.use(projects, projectRouter)

server.get('/', (req,res) => {
  res.send(`API started featuring the following routes ${projects} and ${actions}`)
})

const PORT = 9000

server.listen(PORT)
