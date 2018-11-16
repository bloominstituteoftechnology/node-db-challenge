const projectRouter = require('./projectRouter')


module.exports = server => {
  server.use('/api', projectRouter);

}
