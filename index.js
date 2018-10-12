const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const projectRoutes = require('./projects/projectRoutes');
const actionRoutes  = require('./actions/actionsRoutes');

const dbConfig = require('./knexfile');
 
 const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/projects', projectRoutes);
server.use('/actions' , actionRoutes);


server.get('/', (req, res) =>{
    res.send("it's alive");
  });
  

  
const port = 3300;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
  