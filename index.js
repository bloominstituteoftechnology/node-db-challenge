const server = require('./server.js');

const port = 7890;

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});