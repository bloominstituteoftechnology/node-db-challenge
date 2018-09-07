const express = require('express');
// const db = require('./db/helper/db');

const server = express();
server.use(express.json());

server.get('/api', (req, res) =>{
    res.send('running')
})

server.listen(5500, () =>{
    console.log(`server is listening on port 5500`)
})