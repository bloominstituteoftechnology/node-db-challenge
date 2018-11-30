const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');

const middleware = server => {
    server.use(express.json());
    server.use(morgan('dev'));
    server.use(helmet());
}

module.exports = middleware;
