const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const server = require('.server.js');

server.use(cors(),helmet(),morgan(),express.json());

module.exports = server;