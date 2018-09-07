const express = require("express"); 
const helmet = require("helmet"); 
const cors = require("cors"); 
const knex = require("knex"); 

const dbConfig = require("./knexfile"); 
const db =  knex(dbConfig.development); 

const server = express(); 

server.use(helmet()); 
server.use(express.json()); 

server.get("/", (req, res)=>{
    res.send("Running"); 
}); 

server.get("/projects", (req, res)=>{
    db("projects")
    .then(projects=> res.status(200).json(projects))
    .catch(err => res.status(500).json(err))
})

server.get("/projects/:id", (req, res)=>{
    const {id} = req.params; 
    db("projects")
    .where({id})
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err)); 
})

server.post("/projects", (req, res)=>{
    const project = req.body; 
    db("projects")
    .insert(project)
    .into("projects")
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => res.status(500).json(err)); 
})

server.delete("/projects/:id/actions", (req, res)=>{
     const {id} = req.params; 
     db("projects")
         .where(id)
         .del()
         .join("projects", "projects.id", "actions.project_id")
         .then(project => {
             if(!project){
                 res.status(404).json({message: "id not found"})
                 return;
             }
             res.status(200).json(project);
         })
        .catch(err=> res.status(500).json(err)); 
})

 server.get("/projects/:id/actions", (req, res)=>{
     const {id} = req.params; 
     db("actions")
         .where("actions.project_id", id)
         .join("projects", "projects.id", "actions.project_id")
         .select("actions.id", "actions.desc","actions.notes", "actions.completed","projects.name as projectsOf")
         .then(dish => {
             if(!dish){
                 res.status(404).json({message: "id not found"})
                 return;
             }
             res.status(200).json(dish);
         })
         .catch(err=> res.status(500).json(err)); 
 })
 server.post("/actions", (req, res)=>{
     const action = req.body
     db("actions")
     .insert(action)
     .into("actions")
     .then(action => res.status(200).json(action))
     .catch(err => res.status(500).json(err))
 })

 server.put("/projects/:id", (req, res) => {
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
server.put("/actions/:id", (req, res) => {
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
server.listen(4001, function(){
    console.log("//========4001 Running=======//")
})
