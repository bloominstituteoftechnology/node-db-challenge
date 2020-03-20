const express = require('express')
const helmet = require('helmet')

		express().use(helmet)
		express().use(express.json())
const server = express()
const projRouter = require('../router/proj.js')
const recRouter = require('../router/rec.js')
const taskRouter = require('../router/task.js')




	server.get('/', (req,res)=>{
		res.status(201).json({
			msg:"good to go"
		})
	})
	server.use('/api/projects', projRouter)
	server.use('/api/recources', recRouter)
	server.use('/api/task', taskRouter)



module.exports = server