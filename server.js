const express = require("express")
const server = express()
const db = 

server.use(express.json());

// server.post('/',async(req,res)=>{
//   try{}catch(err){}
// })
// server.post('/',async(req,res)=>{
//   try{}catch(err){}
// })
server.get('/',async(req,res)=>{
  try{
    const info = db 
    res.status(200).json()
  }catch(err){
    res.status(500).json({er,message:'wrong get'})
  }
})


module.exports = server ;