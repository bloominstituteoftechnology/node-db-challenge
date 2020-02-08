const server = require("./hubs/server.js");

const PORT = process.env.PORT || 9876;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
