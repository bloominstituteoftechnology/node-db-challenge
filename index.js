const express=require('express');
const server=express();
const knex=require('knex');
const dbConfig=require('./database/knexfile.js');
const dbr=require('./database/database/modelProject.js');
const db=knex(dbConfig.development);
const PORT=process.env.PORT || 8000;

server.use(express.json());

// dbr.addProject({
//     name: 'Taco Stir Fry',
//     description: "fasdfa",
//     isDone: false })
//   .then(result => {
//     console.log(result);
//   })


server.post('/projects/post', (req, res) => {
    dbr.addProject(req.body).then(id=>res.status(200).json(id)).catch(err=>res.status(500).json(err))
})
server.post('/actions/post', (req, res) => {
    dbr.addAction(req.body).then(id=>res.status(200).json(id))
})



server.get('/projects/:id', (req, res) => {
    dbr.getProject(req.params.id).then(project=>dbr.getActions(req.params.id).then(actions=>res.status(200).json({
        "id": project[0].id,
        "name": project[0].name,
        "description": project[0].description,
        "isDone": project[0].isDone,
        "actions":actions
        
      })))
    
})

server.get('/actions/:id',(req,res)=>{
    dbr.getActions(req.params.id).then(actions=>res.status(200).json(actions))
})

server.listen(PORT, () => console.log(`API running on port ${PORT}`));