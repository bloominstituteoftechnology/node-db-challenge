const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const server = express();
const db = knex(knexConfig.development);

server.use(express.json());

const PORT = 3300;

server.post('/api/projects', (req, res)=>{
    const project = req.body;
    if(project.project_name){
        if(!project.description){
            project.description = "Project description";
        }
        if(!project.is_completed){
            project.is_completed = false;
        }
        db('projects')
        .insert(project)
        .then(id=>{
            res.status(201).json({id: id[0]});
        })
        .catch(err=>{
            res.status(500).json({error: 'Failed to add project to database'});
        })
    }
    else{
        res.status(400).json({errorMessage: 'Please include the name of the project'});
    }
})

server.post('/api/actions', (req, res)=>{
    const action = req.body;
    if(action.action_description && action.project_id){
        if(!action.additional_notes){
            action.additional_notes = "Action notes";
        }
        if(!action.action_completed){
            action.action_completed = false;
        }
        console.log(action);
        db('actions')
        .insert(action)
        .then(id=>{
            res.status(201).json({id: id[0]});
        })
        .catch(err=>{
            res.status(500).json({error: 'Failed to add action to database'});
        })
    }
    else{
        res.status(400).json({errorMessage: 'Please include the name of the action and a valid project id'});
    }
})

server.get('/api/projects/:id', (req, res)=>{
    const {id} = req.params;
    db('actions')
    .where('project_id', Number(id))
    .then(actionsData=>{
        const actions = actionsData.map(action=>{
            return ({
                id: action.id,
                description: action.action_description,
                notes: action.additional_notes,
                completed: action.action_completed == 1
            })
        })
        db('projects')
        .where('id', Number(id))
        .then(projectData=>{
            const project = ({
                id: projectData[0].id,
                name: projectData[0].project_name,
                description: projectData[0].description,
                completed: projectData[0].is_completed == 1,
                actions: actions
            })
            res.json(project);
        })
    })
    .catch(err=>{
        res.status(500).json({error: 'Failed to retrieve data'});
    })
})

server.get('/api/projects', (req, res)=>{
    db('projects')
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.status(500).json({error: 'Failed to retrieve data'});
    })
})

server.get('/api/actions', (req, res)=>{
    db('actions')
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.status(500).json({error: 'Failed to retrieve data'});
    })
})

server.listen(PORT, function(){
    console.log('Starting server');
})