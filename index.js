const server = require("./server.js");

const PORT = 8465;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
