const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');
const contextRouter = require('./routers/contextRouter');

const server = express();
server.use(bodyParser.json());

server.get('/', (req, res) => {
	res.status(200).json({ api: 'running...' });
});

server.use('/projects', projectRouter);
server.use('/actions', actionRouter);
server.use('/contexts', contextRouter);

server.listen(port, function() {
	console.log(`Server running on port ${port}`);
});
