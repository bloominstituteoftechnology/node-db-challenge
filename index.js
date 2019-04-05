const port = 5000

const server = require('./server.js');

server.listen(port, () =>{
    console.log(`\n Server is running on http://localhost:${port}\n`)
});