const port = 6009

const server = require('./server.js');

server.listen(port, () =>{
    console.log(`\n Server is running on http://localhost:${port}\n`)
});




