const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: 'server is up on post:9000'})
})


server.listen(9000, () => console.log('\nServer Listening on port: 9000\n'));

