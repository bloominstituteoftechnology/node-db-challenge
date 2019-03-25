const express = require('express');
const knex = require('knex');
const server = express();
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const PORT = process.env.PORT || 3000;

server.use(express.json());

//POST endpoint for projects
server.post('/api/projects', (req, res) => {
    const project = req.body;
    if(!project.name || !project.description || !project.completed) {
        res.status(400).json({err:'must add required project fields'})
    }
    else{
    db('Projects').insert(project)
    .then(projectData => {
        res.status(201).json(projectData);
    })
    .catch(err => {
        res.status(500).json({err:'unable to add data'})
    })};
});

//POST endpoint for actions
server.post('/api/actions', (req, res) => {
    const action = req.body;
    db('Actions').insert(action)
        .then(actionData => {
        res.status(201).json(actionData);
    })
    .catch(err => {
        res.status(500).json({err:'cannot add action'})
    });
});

//GET for projects
server.get('/api/projects', (req, res) => {
    db('Projects')
    .then(projectId => {res.json(projectId)})
    .catch(err => {res.status(500).json({message: 'there was an error'})})
})

//GET for retrieving a project by its id that returns an object
// ==> DONE by creating object Actions within Projects and thus creating an action array (line 50)
server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('Projects').where('id', id)
    .then(projectId => {
        const project_obj = projectId
        console.log('Project Obj One', project_obj)
        db('Actions')
    .then(actions => {
            console.log('Type Id', typeof id)
            console.log('Type action Id', typeof actions[0].id)
            const project_actions = actions.filter(action => action.project_id === Number(id))
            console.log('Actions', actions)
            console.log('Project Actions', project_actions)
            project_obj[0]['actions'] = project_actions
            console.log('Project Obj Two', project_obj)
            res.json(project_obj)
        })
    .catch(err => {res.status(500).json({err: 'action could not be retrieved'})})
    })
    .catch(err => {res.status(500).json({message: 'project could not be retrieved'})})
})


server.listen(PORT, function() {
    console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`);
  });