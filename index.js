const express = require('express');
const projects = require('./routes/api/projects');
const actions = require('./routes/api/actions');

const server = express();

server.use(express.json());
server.use('/api/projects', projects);
server.use('/api/actions', actions);

server.get('/', (req, res) => {
    res.send(
        `<div>
      <p>Projects:  /api/projects</p>
      <p>Actions:  /api/actions</p>
    </div>`
    );
});

const port = 5000;
server.listen(port, () => console.log(`\n Server Started on Port ${port} \n`));