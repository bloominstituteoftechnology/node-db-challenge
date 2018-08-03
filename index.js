const express = require('express');
const server = express();
server.use(express.json());
// const router = express.Router();
const apiRouter = require('./router/api');

server.use('/api', apiRouter)

server.route('/')
    .get((req,res)=>{
    res.send('working on routes')
})

const PORT = 8005;
server.listen(PORT, ()=>{
    console.log(`API is running on port ${PORT}`)
})