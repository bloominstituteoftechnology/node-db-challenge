const express = require("express");
// const helmet = require("helmet");

const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

const server = express();

// server.use(helmet());
server.use(express.json());
server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

server.get("/", (req, res) => {
    res.send("api running");
  });

const port = 8000;
server.listen(port, function() {{
    console.log(`\n =API on ${port}= \n`);
}});