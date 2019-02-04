const express = require('express');

const port = 5000;

const server = express();

server.get('/', (req, res) => {
    res.send('Is it alive?');
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});