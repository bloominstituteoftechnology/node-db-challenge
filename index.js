const server = require("./server");

const PORT = 7777;

server.listen(PORT, () => {
  console.log(` === PORT: ${PORT} ===`);
});
