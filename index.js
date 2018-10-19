const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const server = express();
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

server.use(helmet());
server.use(express.json());

server.get('/',(req,res)=>{
  res.send('active')
});

//server requests for projects
server.get('/api/projects',(req,res)=>{
  db('projects')
  .then(projects=>{
    console.log('Success');
    res.status(500).json(projects)
  })
  .catch(err=>{
    res.send(err)
  })
})

server.get('/api/projects/:id',async(req,res)=>{
  try {
    const {id}= req.params;
    const projects = await db('projects').where({id}).first();
    if(projects){
      res.status(200).json(projects);
    }
    else{
      res.status(404).json({message:'project not found',})
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

server.post('/api/projects',(req,res)=>{
  const projects = req.body;
  db.insert(projects)
  .into('projects')
  .then(ids => {
    res.status(201).json(ids[0]);
  })
  .catch(err=>{
    res.status(500).json(err)
  })
})
//server requests for actions

server.get('/api/actions',(req,res)=>{
  db('actions')
  .then(actions=>{
    console.log('Success');
    res.status(500).json(actions)
  })
  .catch(err=>{
    res.send(err)
  })
})

server.get('/api/actions/:id',async(req,res)=>{
  try {
    const {id}= req.params;
    const action = await db('zoos').where({id}).first();
    if(action){
      res.status(200).json(action);
    }
    else{
      res.status(404).json({message:'project not found',})
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

server.post('/api/actions',(req,res)=>{
  const action = req.body;
  db.insert(action)
  .into('actions')
  .then(ids => {
    res.status(201).json(ids[0]);
  })
  .catch(err=>{
    res.status(500).json(err)
  })
})


const port=3500;
server.listen(port,()=> {
  console.log(`\n===Api Active On ${port}===\n`)
  }
);
