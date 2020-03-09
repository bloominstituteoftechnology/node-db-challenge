const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const projectRouter = require('./projects/primaryRouter');
const welcomeRouter = require('./welcomeRouter');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/', welcomeRouter);
server.use('/api/projects', projectRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'SOMETHING IS NOT RIGHT UP IN THIS BISH!(ERROR FROM SERVER.js)'
	});
});

module.exports = server;
