const express = require("express");
const server = require("./server.js");

const PORT = process.env.PORT || 2222;

server.listen(PORT, () => {
  console.log(`\n** Server running on port: ${PORT} **\n`);
});
