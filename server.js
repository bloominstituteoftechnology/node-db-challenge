const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.JSON());

// endpoints here 

server.listen(3000, function(){console.log('server running on port 3000')});