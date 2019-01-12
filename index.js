const express = require('express');
const knex = require('knex');
const server = express();

// PORT
const PORT = 2300;
//Route files
const projects = require('./routes/projects');
const actions = require('./routes/actions');

//Middleware
server.use(express.json());
server.use('/', projects);
server.use('/', actions);


server.get('/', (req,res) => {
    res.json({Message: `Server is up and running now at ${PORT}`});
});


server.listen(PORT, () => {
   console.log(`Server is up and running at localhost://${PORT}`);
})



