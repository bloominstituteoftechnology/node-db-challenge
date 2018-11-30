const server = require('./server');

const port = 3456;
server.listen(port, () => console.log(`\nServer is running on port ${port}\n`));