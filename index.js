// https://github.com/LambdaSchool/Sprint-Challenge-RDBMS/pull/129


const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex');
const knexfile = require('./knexfile');
const dbConfig = knex(knexfile.development);
const morgan = require('morgan');
const helmet = require('helmet');
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan());
app.use(helmet());


app.get('/',(req,res)=>{
    res.send('I got IT.');
});

app.listen(PORT, ()=>{console.log(`Server listenting on PORT ${PORT}`);
});