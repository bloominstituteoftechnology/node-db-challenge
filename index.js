const server = require("./api/server.js");
const port = 9000;

server.listen(port, () => {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});