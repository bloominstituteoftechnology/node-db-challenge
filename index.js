const server = require('./api/server');

const port = 3300;
server.listen(port, function() {
  console.log(`\nListening on http://localhost:${port} \n`);
});