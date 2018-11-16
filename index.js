const express = require('express')
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();
const port = 9000;
server.use(express.json());

// made a helper because the get request was getting crouded
const getProjectAndActions = (projectId) =>{
    if(projectId) {
    return db('actions')
        .join('projects', 'actions.project_id', '=', 'projects.id')
        .where('projects.id', projectId)
        .select(
            'projects.id',
            'projects.name',
            'projects.description',
            'projects.is_completed',
            'actions.project_id',
            'actions.project_id',
            'actions.name'
            )
    } else {
        return db('project');
}
}

server.get('/api/projects',(req,res) => {
    db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
})

//   MVP  Endpoints
server.post('/api/projects', (req,res) => {
    const addedProject = req.body;
    if(!addedProject){
        res.status(500).send("Please provide all fields")
    }else{
        db('projects')
        .insert(addedProject)
        .then(projectID => res.status(200).json(projectID))
        .catch(err => res.status(500).json({youdonefuckedup : err}));
    }
})

server.post('/api/actions', (req,res) => {
    const addedAction = req.body;
    if(!addedAction.name || !addedAction.project_id || !addedAction.description){
        res.status(500).send("Please provide all fields")
    }else{
        db('actions')
        .insert(addedAction)
        .then(actionID => res.status(200).json(actionID))
        .catch(err => res.status(500).json({youdonefuckedup : err}));
    }
})

server.get('/api/projects/:id',(req,res) => {
    const { id } = req.params;
    getProjectAndActions(id)
        .then(project => {
            if(!project){
                res.status(404).json("Project does not exist")
            }else{
                res.status(200).json(project)
            }
        })
        .catch(err => {
            res.status(500).json(`can't find specified project , ${err}`)
        })
})



server.listen(port,() => {console.log(`server listening on port ${port}`)})