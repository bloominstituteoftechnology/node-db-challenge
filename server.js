const express = require('express');
const helmet = require("helmet");

const projectRouter = require('');

require('dotenv').config()

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something is wrong, check again.",
    })
})

module.exports = server;
