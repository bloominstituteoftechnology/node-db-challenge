const helmet=require('helmet');
const morgan=require('morgan');
const knex=require('knex');
const dbConfig=require('./knexfile');
const db=knex(dbConfig.development);
const express=require('express');
const server=express();

server.use(morgan('dev')).use(helmet()).use(express.json());

server.get('/api/actions',(req,res)=>{

})
const port=9000;
server.listen(port,()=>console.log('Engines firing server starting new horizons venturing.'));