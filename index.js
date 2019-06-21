const server = require('./server');


const port = process.env.PORT || 4848;
server.listen(port, () =>
console.log(`\n** API running on http://localhost:${port} **\n`)
);