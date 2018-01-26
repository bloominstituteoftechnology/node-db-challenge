const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

// endpoints here 

server.get('/', (req, res)=>{
    res.send('all good');
});

server.listen(3000, function(){console.log('server running on port 3000')});