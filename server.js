const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5000;

// require all Endpoints

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
	res.json({ api: "running..." });
});

// server.use ('/api/Endpoints')

server.listen(PORT, () => console.log(`running on port ${PORT}`));
