const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

const helperMethods = require('./data/helper-methods.js');

const convertFlagToBoolean = (flag)=>{
    if (flag ===0){
        return false;
    } else{
        return true;
    }
}

const convertCompletedFlag = (object) =>{
    console.log(object);
    if (object.project_id){
        delete object.project_id;
    };
    return {
        ...object,
        completed: convertFlagToBoolean(object.completed)
    };
}
server.get('/api/project',(req,res)=>{
    helperMethods.getProjects()
      .then(projects=>{
        res.status(200).json(projects.map(convertCompletedFlag));
      })
      .catch(err=>res.status(500).json(err));
})

server.get('/api/action',(req,res)=>{
    helperMethods.getActions()
      .then(actions=>{
        res.status(200).json(actions.map(convertCompletedFlag));
      })
      .catch(err=>res.status(500).json(err));
})

server.get('/api/project/:id',(req,res)=>{
    const id = req.params.id;
    helperMethods.getProject(id)
        .then(project=>{
            if (project && project != {}){
                res.status(200).json(convertCompletedFlag(project));
            } else {
                res.status(404).json({
                Error: "ID not found"
                })
            }
            })
        .catch(err=>res.status(500).json(err));
})

server.get('/api/action/:id',(req,res)=>{
    const id = req.params.id;
    helperMethods.getAction(id)
        .then(action=>{
            if (action && action != {}){
                res.status(200).json(convertCompletedFlag(action));
            } else {
                res.status(404).json({
                Error: "ID not found"
                })
            }
            })
        .catch(err=>res.status(500).json(err));
})

server.get('/api/project/:projectId/action',(req,res)=>{
    const projectId = req.params.projectId;
    helperMethods.getActionsOfProject(projectId)
        .then(actionsObject=>{
                console.log(actionsObject);
                if (actionsObject && actionsObject != {}){
                    res.status(200).json(actionsObject);
                } else {
                    res.status(404).json({
                    Error: "ID not found"
                    })
                }
            })
        .catch(err=>res.status(500).json(err));
})

server.post('/api/project/', (req, res)=>{
        const project = req.body;
        helperMethods.addProject(project)
            .then(id=>{
                res.status(201).json(id);
            })
            .catch(err=>res.status(500).json(err));
})

server.post('/api/action/', (req, res)=>{
    const action = req.body;
    helperMethods.addAction(action)
        .then(id=>{
            res.status(201).json(id);
        })
        .catch(err=>res.status(500).json(err));
})

server.listen(9000, ()=>console.log('\nAPI running on 9000\n'))