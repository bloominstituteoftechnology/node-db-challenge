const routeProjects = require('./Routes/routeProjects')
module.exports = (server) => {
  server.use('/api/Projects', routeProjects)
}
