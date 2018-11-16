
const server = require('./server');

const port = 8000;

server.listen(port, function() {
  console.log(`\n=oOo= Web API Listening on http://localhost:${port}=oOo=\n`);
});
