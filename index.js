const express = require("express")
const server = express()
server.listen(9000,()=>{
  console.log(`\n** http://localhost:9000 **\n`)
})



//const server = express();
const helmet = require('helmet')
const data = require('./data/methods');

server.use(helmet());
server.use(express.json());

// server.post('/home',async(req,res)=>{
//   try{

//   }catch(err){}
// })
// server.post('/',async(req,res)=>{
//   try{}catch(err){}
// })
server.get('/home',async(req,res)=>{
  try{
    const info = await data.find(req.query)
    res.status(200).json({info,message:'hello'})
  }catch(err){
    res.status(500).json({er,message:'wrong get'})
  }
})