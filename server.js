const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
  res.json({ api : 'cleared for liftoff'});
})

server.listen(5000, () => console.log('we have ignition on port 5000'));
