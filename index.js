const express = require('express')

const server = express()
server.use(express.json())

//Routes
const projectsRoute = require('./data/routes/projectsRoute')
const actionsRoutes = require('./data/routes/actionsRoute')

server.use('/api/projects', projectsRoute)
server.use('/api/actions', actionsRoutes)

//Listening

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
