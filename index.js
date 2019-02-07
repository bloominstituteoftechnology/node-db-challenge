const express=require('express');
const server=express();
const knex=require('knex');
const dbConfig=require('./database/knexfile.js');
const dbr=require('./database/database/modelProject.js');
const db=knex(dbConfig.development);
const PORT=process.env.PORT || 8000;

server.use(express.json());



server.listen(PORT, () => console.log(`API running on port ${PORT}`));