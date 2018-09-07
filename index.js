const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()


server.use(helmet())
server.use(cors())
server.use(morgan('short'))
server.use(express.json())

//Routes
const projects = '/api/projects'
const actions = '/api/actions'
