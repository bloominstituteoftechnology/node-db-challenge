const express = require('express');
const server = express();
const dbConfig = require('./data/dbConfig');

const PORT = 8000;

server.use(express.json());

server.get('/projects', async (req, res) => {
  try {
    const projects = await dbConfig('projects');
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).send(`You done goofed with ${err}`);
  }

})

server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
