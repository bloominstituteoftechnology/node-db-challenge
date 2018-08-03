const express = require('express');

const db = require('./data/db');

const server = express();
server.use(express.json());

const port = 3333;


//HOME
server.get('/', (req, res) => {
    res.send('Rock-n-Roll!!');
});



server.listen(port, () => 
    console.log(`Rock-n-Roll @port: ${port}`)
);
