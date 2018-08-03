const express = require('express');
const server = express();

server.use(express.json());

server.use('/projects', projectRoute)

server.listen(8000, () => {
    console.log('====API====')
})