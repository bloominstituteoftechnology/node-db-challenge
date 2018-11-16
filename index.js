const express = require('express');
const port = process.env.PORT || 9000;
const server = express();

server.listen(port, () => {
  console.log(`\n === Server Listening on Port${port}`);
});
