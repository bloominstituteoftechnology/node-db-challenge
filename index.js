const server = require("./server.js");

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`\n===This server has a pulse on ${PORT}===\n`);
});
