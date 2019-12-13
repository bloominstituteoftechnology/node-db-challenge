const 
    express = require("express"),
    helmet = require("helmet"),
    ProjectRouter = require("./projects/project-router"),
    server = express();

server
    .use(helmet())
    .use(express.json())
    .use("/api/projects", ProjectRouter);

module.exports = server;