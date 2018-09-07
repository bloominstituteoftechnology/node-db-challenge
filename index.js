const express = require('express'); 
const knex = require('knex'); 
const dbConfig = require('./knexfile'); 

const db = knex(dbConfig.development); 

const server = express(); 
server.use(express.json()); 

// =======================PROJECT CRUD OPERATIONS==========================================

server.get('/api/projects', (req, res) => {
    db('projects').then(projects => {
        res.status(200).json(projects)
    }).catch(err => {
        res.status(500).json({err: "Error accessing data from the database"})
    })
})

server.get('/api/projects/:id', (req, res) => {
    const { id }  = req.params; 
    db('projects')
        .where('project.id', id)
        .join('actions', 'project.id', 'action.project_id')
        .then(project => {
        res.status(200).json(project); 
    }).catch(err => {
        res.status(500).json({message: "Error retrieving project from database"})
    })
})

server.post('/api/projects', (req, res) => {
    const data = req.body; 
    db.insert(data).into('projects').then(id => {
        res.status(201).json(id)
    }).catch(err => {
        res.status(500).json({err: "Error posting data to the database"})
    })
})

server.delete("/api/projects/:id", (req, res) => {
    const { id } = req.params; 
    db('projects')
        .where({id})
        .del()
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "The ID specified is not valid"})
            }
            res.status(200).json({message: "Deleted project successfully"})
        }).catch(err => {
            res.status(500).json(err)
        })
}); 

server.put("/api/projects/:id", (req, res) => {
    const { id } = req.params; 
    const data = req.body; 
    db('projects')
        .where({id})
        .update(data)
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "The ID specified is not valid"})
            }
            res.status(200).json({message:"Updated project successfully"})
        }).catch(err => {
            res.status(500).json(err); 
        })
}); 

// =============================ACTION CRUD OPERATIONS ===============================================

server.get('/api/actions', (req, res) => {
    db('actions').then(actions => {
        res.status(200).json(actions)
    }).catch(err => {
        res.status(500).json({err: "Error accessing data from the database"})
    })
})

server.post('/api/actions', (req, res) => {
    const data = req.body; 
    db.insert(data).into('actions').then(id => {
        res.status(201).json(id)
    }).catch(err => {
        res.status(500).json({err: "Error posting data to the database"})
    })
})

server.delete("/api/actions/:id", (req, res) => {
    const { id } = req.params; 
    db('actions')
        .where({id})
        .del()
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "The ID specified is not valid"})
            }
            res.status(200).json({message: "Deleted action successfully"})
        }).catch(err => {
            res.status(500).json(err)
        })
}); 

server.put("/api/actions/:id", (req, res) => {
    const { id } = req.params; 
    const data = req.body; 
    db('actions')
        .where({id})
        .update(data)
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "The ID specified is not valid"})
            }
            res.status(200).json({message:"Updated action successfully"})
        }).catch(err => {
            res.status(500).json(err); 
        })
}); 


server.listen(6500, () => {console.log("Starting port at PORT 6500")}); 

