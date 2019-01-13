const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();

// PORT
const PORT = process.env.PORT || 2300;
//Route files
const projects = require('./routes/projects');
const actions = require('./routes/actions');

//Middleware
server.use(express.json(), helmet(), logger('dev'));
server.use('/', projects);
server.use('/', actions);


server.get('/', (req,res) => {
    res.json({Message: `Server is up and running now at ${PORT}`});
});


server.listen(PORT, () => {
   console.log(`Server is up and running at localhost://${PORT}`);
})



