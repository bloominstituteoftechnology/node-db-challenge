const server = require('./server.js')

const port = 4005;

server.listen(port,() => console.log(`server running on ${port}`))