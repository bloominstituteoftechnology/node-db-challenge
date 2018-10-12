const express = require('express');
const helmet = require('helmet');
const projectRoutes = require('./project/projectRoutes');
const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
  res.send("Here Are Your Projects!");
});

server.use('/api/projects', projectRoutes);

server.listen(9000, () => console.log('\n=== API running on 9000 ===\n'));