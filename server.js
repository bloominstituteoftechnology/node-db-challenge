const express= require('express');
const server=express();
server.use(express.json());

server.get('/', (req, res) =>{
    res.send('Sprint Challenge RDBMS')
})

//////////// Projects //////////

server.get('/projects', (req, res) => {
    db('projects')
    .then(project=>{
        res.status(200).json(project);
    })
    .catch(error=> res.status(500).json(error));
});

server.get('projects/:id', (req, res)=> {
    const {id}= req.params;
    db('projects')
    .where({id})
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error=> res.status(500).json(error));
});

server.listen(8000, () => console.log('Running on port 8000'));