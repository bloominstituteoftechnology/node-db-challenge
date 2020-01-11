const express = require('express');

const projectRouter= require('./routers/project-router');
const server = express();


server.use(express.json());
server.use('/api/projects', projectRouter);

server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
})


module.exports = server;