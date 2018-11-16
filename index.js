const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development)

const express = require('express');
const server = express();

server.use(express.json());


server.get('/',(req,res)=>{
    res.status(200).send('ok.. ok.. im up')
  })
server.post('/api/projects', async (req,res)=>{
    const project = req.body;
    if(project.Name && project.IdStatus){
        try {
            const response = await db('Projects').insert(project)
            res.status(201).json(response)
        } catch (error) {
            res.status(500).json({message:error})
        }
    } else {
        res.status(400).json({message:"Both Name and IdStatus are required."})
    }
    
})
server.post('/api/actions', async (req,res)=>{
    const action = req.body;
    if(action.Description){
        try {
            const response = await db('Actions').insert(action)
            res.status(201).json(response)
        } catch (error) {
            res.status(500).json({message:error})
        }
    } else {
        res.status(400).json({message:"Description is required."})
    }
})

server.get('/api/projects/:id',async (req,res)=>{
    IdProject = req.params.id;
    try {
        const project = await db('Projects').innerJoin('Status','Status.Id','Projects.IdStatus')
        .select(['Projects.Name','Projects.Description As ProjectDesc','Status.Description As Status'])
        .where('Projects.Id',IdProject)

        const actions = await db('Projects_Actions_XREF')
                              .innerJoin('Actions', 'Actions.Id', 'Projects_Actions_XREF.IdAction' )
                              .innerJoin('Status','Status.Id','Projects_Actions_XREF.IdStatus')
                              .select('Actions.Description As ActionDesc', 'Actions.Notes','Status.Description As Status')
                              .where('Projects_Actions_XREF.IdProject',IdProject)
        project[0].actions = actions; //given time i'd refactort this so you don't have to index 0 
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({message:error})
    }


})


const port = 5300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});