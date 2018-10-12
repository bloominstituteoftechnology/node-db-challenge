const express = require('express');
const helmet = require('helmet');

// Routes for projects
const projectRoutes = require('./routes/projectRoutes.js');
// Routes for actions to the projects
const actionRoutes = require('./routes/actionRoutes.js');

const server = express();
const port = 8000;

server.use(helmet(), express.json());

// Sanity Check
server.get('/', (req, res) => {
    res.send('<h1>Live Server<h1>')
});

// Use the routes
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);


function runServer() {
    console.log('\x1b[34m', `\n[server] started server`);
    console.log(`[server] running on port: ${port}\n`)
    console.log('\x1b[0m', '');
}

server.listen(port, runServer());