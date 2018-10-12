const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const dbConfigure = require("./knexfile");
const db = knex(dbConfigure.development);
const server = express();
const port = 9000;

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
	res.send('<h2>Server is running.</h2>');
})


server.listen(port, function() {
    console.log(`\n API RUNNING ON PORT ${port} \n`);
  });