const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const app = express();

app.use(express.json());
app.use(helmet());

// PORT variable
const PORT = 4567;

app.listen(() => {
    console.log(`Application listening on port ${ PORT }`)
})