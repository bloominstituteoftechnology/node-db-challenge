const express = require('express');
const helmet = require('helmet');
const projectRoutes = require('./projects/projectRoutes');
const server = express();

server.use(helmet());
server.use(express.json());

//SANITY CHECK
server.get('/', (req, res)=> {
    res.send('Your server is working'
    )
})

server.use('/projects', projectRoutes);

server.listen(8888, ()=> console.log(` \n Server is running on 8888 \n `))