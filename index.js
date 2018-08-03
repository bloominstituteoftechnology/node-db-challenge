const express = require('express')

const db = require('./data/db')

const server = express()

server.use(express.json())

const port = 3300
server.listen(port, function() {
    console.log(`WEB API listening on http://localhost:${port}`)
})

// endpoints

server.get('/', (req, res) => {
    res.send('By Jove, it\'s working! (at least a little)')
})


// ************************************  Projects *********************************

server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => res.status(500).json(err))
})

server.get('/api/projects/:id', (req,res) => {
    const {id} = req.params
    db('projects')
        .where({id})
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => res.status(500).json(err.message))
})

server.post('/api/projects', (req,res) => {
    const project = req.body

    db.insert(project)
        .into('projects')
        .then(id => {
            res.status(200).json({inserted_Id : id, inserted : project})
        })
        .catch(err => res.status(500).json(err.message))
})

server.delete('/api/projects/:id', (req, res) => {
    const {id} = req.params
    db('projects')
        .where({id})
        .del()
        .then(id => {
            console.log(id)
            res.status(200).json({"Deleted_id" : id})
        })
        .catch(err => res.status(500).json(err.message))
})

server.put('/api/projects/:id', (req, res) => {
    const {id} = req.params
    const updated = {...req.body}
    db('projects')
        .where({id})
        .then(count => {
            if(count.length > 0){
                db('projects')
                    .where({id})
                    .update(updated)
                    .then(
                        res.status(200).json({updated})
                    )
            }else{
                res.status(404).json({error: "No project by that ID"})
            }
        })
        .catch(err => res.status(500).json(err.message))
})
// ************************************  actions *********************************


server.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => res.status(500).json(err))
})

server.get('/api/actions/:id', (req, res) => {
    const {id} = req.params
    db('actions')
        .where({id})
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => res.status(500).json(err.message))
})


server.post('/api/actions', (req, res) => {
    const action = req.body
    db.insert(action)
        .into('actions')
        .then(id => {
            res.status(200).json({inserted_Id : id, inserted : action})
        })
        .catch(err => res.status(500).json(err.message))
})

server.delete('/api/actions/:id', (req, res) => {
    const {id} = req.params
    db('actions')
        .where({id})
        .del()
        .then(id => {
            console.log(id)
            res.status(200).json({"Deleted_id" : id})
        })
        .catch(err => res.status(500).json(err.message))
})

server.put('/api/actions/:id', (req, res) => {
    const {id} = req.params
    const updated = {...req.body}
    db('actions')
        .where({id})
        .then(count => {
            if(count.length > 0){
                db('actions')
                    .where({id})
                    .update(updated)
                    .then(
                        res.status(200).json({updated})
                    )
            }else{
                res.status(404).json({error: "No action by that ID"})
            }
        })
        .catch(err => res.status(500).json(err.message))
})