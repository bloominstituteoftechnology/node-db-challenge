const helmet = require('helmet');
const express = require('express');
const dbP = require('./helpers/functions.js');
const dbA = require('./helpers/action_functions.js');

const server = express();
server.use(helmet());
server.use(express.json());

server.get('/',(req,res)=>{
res.send('use the endpoint /api/projects or /api/projects/{number}');
})

server.post('/api/projects',(req,res)=>{
const { name,description } = req.body;
dbP.add ({name,description})
	.then(response => {
	res.status(200).json(response);
	})
	.catch(error => {
	res.status(500).json(error);
	})
})

server.get('/api/projects',(req,res)=>{
dbP.find()
	.then(response => {
	res.status(200).json(response);
	})
	.catch(error => {
	res.status(500).json(error);
	})
})

server.get('/api/projects/:id',(req,res)=>{
const { id } = req.params;
dbP.findById(id)
	.then(response => {
	res.status(200).json(response);
	})
	.catch(error => {
	res.status(500).json(error);
	})
})

server.post('/api/actions',(req,res)=>{
const { description,notes,project_id } = req.body;
dbA.add({description,notes,project_id})
	.then(response => {
	res.status(200).json(response);
	})
	.catch(error => {
	res.status(500).json(error);
	})
})

server.get('/api/actions',(req,res)=>{
dbA.find()
	.then(response => {
	res.status(200).json(response);
	})
	.catch(error => {
	res.status(500).json(error);
	})
})

server.listen(3333,()=>console.log('\n server listening on port 3333 \n'));