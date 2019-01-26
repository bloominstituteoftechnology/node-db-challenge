const express = require("express")
const helmet = require("helmet")
const logger = require("morgan")
const server = express()
const port = process.env.port || 3095;

server.use(
 helmet(),
 logger(),
 express.json()
)

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionsRouter)

server.listen(port, () => {
 console.log(`Server is running live on ${port}`)
})