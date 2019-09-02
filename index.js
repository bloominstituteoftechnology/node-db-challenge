const server = require('./server.js')

const port = 3333;

server.listen(port, () => {console.log(`\n*** Server Running on Port: ${port} ***\n`)})