const express = require("express");
const knex = require("knex")
const knexCongfig = require("./knexfile.js");
const db = knex(knexCongfig.development);

const server = express();

server.use(express.json())

server.get("/", (req, res) => {
    res.send('hello')
})

//Get projects
server.get('/api/projects', (req, res) => {
    db('Projects')
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Get project by id
server.get("/api/projects/:id", (req, res) => {
    const { id } = req.params;
    db("Projects")
      .where({ id })
      .then(project => {
          db("Actions")
            .where({ project_id: id })
            .then(actions => {
              res.status(200).json({ project, actions });
            })
            .catch(err => {
              res.status(500).json(err);
            });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  


//Post projects
server.post('/api/projects', (req, res) => {
    const project = req.body
    db.insert(project)
        .into('Projects')
        .then(addProject => {
            res.status(200).json(addProject)
        })
        .catch(err => {
            res.status(500).json(err)
        })

})

//Delete projects




//get actions
server.get('/api/actions', (req, res) => {
    db('Actions')
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//get actions by id


server.get('/api/actions/:id',(req,res)=>{
    const {id} = req.params
    db('Actions')
    .where({id})
    .first()
    .then(getAction =>{
        res.status(200).json(getAction)
    })
    .catch(err => {
        res.status(200).json(err)
    })

})

// post actions 

server.post("/api/actions", (req, res) => {
    const action = req.body
    db.insert(action)
        .into('Actions')
        .then(addAction => {
            res.status(200).json(addAction)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//delete actions 

server.delete("/api/actions/:id",(req,res) => {
    const {id} = req.params
    db("Actions")
    .where({id})
    .del()
    .then(del => {
        res.status(200).json(del)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})

//Structured get for Project and Actions


server.listen(9000, () => console.log('api running on 9000'))
