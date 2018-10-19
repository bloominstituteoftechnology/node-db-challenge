const express = require('express');
const helmet = require('helmet');

const server = express();


server.use(helmet());
server.use(express.json());

server.get('/',(req,res)=>{
  res.send('active')
});
const port=3500;
server.listen(port,()=> {
  console.log(`\n===Api Active On ${port}===\n`)
  }
);
