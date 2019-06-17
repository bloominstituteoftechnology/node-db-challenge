const server = require('./server.js');

const port = 4400;
server.listen(port, () => console.log(`\n*** Webpt4 db challenge Listening on http://localhost:${port} ***\n`));
