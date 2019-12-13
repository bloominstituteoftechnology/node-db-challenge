const express = require('express');

const db = require('./data/projcetdb');

const server = express();

server.use(express.json());

server.get("/api/projects", (req,res)=>{
    db.find()
        .then(data=>{
            data.map(item=>{
                if(item.completed === 0){
                    item.completed = false;
                }else{
                    item.completed = true;
                }
            })
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error getting projects'});
        })
});

server.get("/api/projects/:id", (req,res)=>{
    db.findById(req.params.id)
        .then(data=>{
            
            if(data.completed === 0){
                data.completed = false;
            }else{
                data.completed = true;
            }
            
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error getting projects'});
        })
});

server.get("/api/projects/:id/tasks", (req,res)=>{
    db.findTask(req.params.id)
        .then(data=>{
            data.map(item=>{
                if(item.completed === 0){
                    item.completed = false;
                }else{
                    item.completed = true;
                }
            })
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error getting tasks'});
        })
});

server.get("/api/projects/:id/resources", (req,res)=>{
    db.findProjectResource(req.params.id)
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error getting resources'});
        })
});

server.get("/api/resources", (req,res)=>{
    db.findResources()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error getting resources'});
        })
});

server.post("/api/projects", (req,res)=>{
    db.addProject(req.body)
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error adding project'});
        })
});

server.post("/api/projects/:id/tasks", (req,res)=>{
    db.addTask({...req.body,projectID:req.params.id})
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error adding tasks'});
        })
});

server.post("/api/resources", (req,res)=>{
    db.addResource(req.body)
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error adding resources'});
        })
});

server.post("/api/projects/:id/resources/:resid", (req,res)=>{
    db.connectResource(req.params.resid,req.params.id)
        .then(data=>{
            res.status(200).json({message:"successfully connected resource to project"});
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error:error, errorMessage:'Error connecting resource to project'});
        })
});


module.exports= server;