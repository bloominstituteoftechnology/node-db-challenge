const express = require("express")
const server = express()
const ProjectRouter = require("./data/projects/projects-router")
const ResourcesRouter = require("./data/resources/resources-router")
const TasksRouter = require("./data/tasks/tasks-router")
server.use(express.json())

server.use('/projects', ProjectRouter)
server.use('/resources', ResourcesRouter)
server.use('/tasks', TasksRouter)
server.get('/', (req, res) => {
    return res.json({message: "Welcome to the DIY DB!"})
})

const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})