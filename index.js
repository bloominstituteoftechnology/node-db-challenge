const express = require ('express');
const projects = require('./api/projects')
const actions = require('./api/actions')
const server = express ();

server.use(express.json());
server.use('/api/projects', projects)
server.use('/api/actions', actions)

server.get('/',(req, res)=>{
    res.send()
})

const port = 5000;
server.listen (port,() =>{
  console.log (`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
