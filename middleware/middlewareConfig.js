// Imports
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

// Middleware Config function
const middlewareConfig = server => {
  server.use(morgan('dev'));
	server.use(helmet());
	server.use(express.json());
}

// Export middlewareConfig function
module.exports = middlewareConfig;
