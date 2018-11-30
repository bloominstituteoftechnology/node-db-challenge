const express = require('express');
const morgan = require('morgan');
const actionRouter = require('../middleware/actionRouter');
const projectRouter = require('../middleware/projectRouter');

module.exports = server => {
  server.use(express.json());
  server.use(morgan('dev'));
  server.use('/api/actions', actionRouter);
  server.use('/api/projects', projectRouter);
}