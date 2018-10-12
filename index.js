const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 8500;

server.use(cors());
server.use(helmet());
server.use(express.json());



server.listen(port, () => console.log(`\nAPI running on http://localhost:${port}\n`));