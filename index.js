const server = require("./server.js");
const PORT = 4000;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on PORT ${PORT} ***\n`);
});