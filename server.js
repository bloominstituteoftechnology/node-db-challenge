const express = require('express');
const helmet = require('helmet');

const projectRoutes = require('./server_routers/projectRoutes');
const actionRoutes = require('./server_routers/actionRoutes')

const server = express();

//middleware
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.status(200).send("Welcome to Sprint-Challenge-RDBMS")
})

//=== Endpoints for Projects ===
server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

//=== Error Handler
server.use((err, req, res, next) => {
    res.status(err.code).send({message: err.message, error: err.error});
})

const port = 8000;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
  });