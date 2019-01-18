const middlewareConfig = require("../middleware/middlewareConfig");
const server = require(express());

middlewareConfig(server);

module.exports = server;
