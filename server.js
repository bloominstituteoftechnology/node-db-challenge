const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');

//Server Instantiation
const appServ = express();

//Third party middleware
//express.json returns json objects of the response
//All global middlewares that will be used across enpoints must also be plugged into the app
//cors and helmet middlewares are not used
appServ.use(express.json(), logger('combined'), cors(), helmet());

//Root Request/Route Handler
appServ.get('/', (req, res) => {
    res.send('Test for root endpoint!')
});



















//Port & Port Listener
const port = 6000;
appServ.listen(port, () => console.log(`\n Listening on ${port}`));