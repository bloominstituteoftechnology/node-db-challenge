const express = require('express');
const server = express();
server.use(express.json());
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