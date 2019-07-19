const server = require('./server');

const port = process.envPORT || 6000;
server.listen(port, () =>
console.log(`\n** API running on http://localhost:${port} **\n`)
);
