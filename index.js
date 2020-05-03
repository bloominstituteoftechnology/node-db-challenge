const express = require("express");

const server = express();

server.use(express.json());
const port = process.env.PORT || 8000;

server.get("/", (req, res) => {
  res.status(200).send(`<h1>Aaron's Node DB Sprint Challenge</h1>`);
});

server.listen(port, () => {
  console.log(`Server initialized at http://localhost:${port}...`);
});
