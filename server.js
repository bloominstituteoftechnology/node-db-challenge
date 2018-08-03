const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');


const server= express();

server.use(express.json());

server.use(morgan('dev'));

server.get('/', (req, res) => {
	res.send('Testing....');

});










server.use((req, res) => {
  res.status(404).send("Wrong path. Please provide a correct url");
});


server.listen(4001, ()=> console.log('API listening on port 4001'));
