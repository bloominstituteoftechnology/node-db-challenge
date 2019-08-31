// bring in server configurations
const server = require('./api/server.js')
// set port
const port = process.env.PORT || 6000
// call listen method on our server
server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
