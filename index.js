  
const server = require("./server.js");

const port = process.env.PORT || 9090;

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});