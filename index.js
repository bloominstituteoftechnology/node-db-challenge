const express = require("express")
const helmet = require("helmet")
const logger = require("morgan")
const server = express()
const port = process.env.port || 3095;
const projectRouter = require('./data/routes/projectRouter')
const actionsRouter = require('./data/routes/actionsRouter')

server.use(
 helmet(),
 logger('dev'),
 express.json()
)

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionsRouter)

server.listen(port, () => {
 console.log(`Server is running live on ${port}`)
})