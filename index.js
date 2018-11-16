const express = require("express");
const configureMiddleware = require("./config/middleware.js");
const server = express();

configureMiddleware(server);

const port = 9000;
server.listen(port, () => console.log(`Running on Port ${port}`));
