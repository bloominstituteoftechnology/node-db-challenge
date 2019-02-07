const express=require('express');
const server=express();
const knex=require('knex');
const dbConfig=require('./database/knexfile.js');
const dbr=require('./database/database/modelProject.js');
const db=knex(dbConfig.development);
const PORT=process.env.PORT || 8000;

server.use(express.json());

dbr.addProject({
    name: 'Taco Stir Fry',
    description: "fasdfa",
    isDone: false })
  .then(result => {
    console.log(result);
  })


// server.post('/projects/post', (req, res) => {
//     dbr.addProject(req.body).then(id=>res.status(200).json(id)).catch(err=>res.status(500).json(err))
// })
// server.post('/actions/post', (req, res) => {
//     dbr.addAction(req.body).then(id=>res.status(200).json(id))
// })

// server.get('/projects/:id', (req, res) => {
//     let foundProject={};
//     dbr.getProject(req.params.id).then(project=>foundProject=project);
//     console.log(foundProject);
// })



server.listen(PORT, () => console.log(`API running on port ${PORT}`));