const server = require("./api/server.js");
const express = require("express");
const knex = require("knex");
const dbConfig = require("./knexfile");

const port = 8000;
server.listen(port, () => {
  console.log(`\n* API running on ${port} *\n`);
});
