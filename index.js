const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const server = express();
const port = 8000;

server.use(cors());
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.status(200).send(`Server running @ localhost:${port}`);
});

server.use(function (req, res) {
    res.status(404).json({error: "Ain't nobody got time for that!"});
});

server.listen(port, () => console.log(`Server running @ localhost:${port}`));
