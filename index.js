const express = require ('express')
const knex = require('knex')
const server = express();
const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development); 
const PORT = 6543

server.use(express.json())

server.get('/api/projects', (req, res) => {
  db('projects').then(project => {
    res.status(200).json(project)
  })
  .catch( error => { res.status(500).json({error: 'request failed'})
  })
})

server.post('/api/projects', (req, res) => {
    const body = req.body
    db('projects').insert(body)
      .then(project => {
          res.status(200).json(project)
      })
      .catch(error => { res.status(200).json({error: "there was an error"})})
})

server.get('/api/actions', (req, res) => {
    db('actions').then(project => {
      res.status(200).json(project)
    })
    .catch( error => { res.status(500).json({error: 'request failed'})
    })
  })
  

  server.post('/api/actions', (req, res) => {
      const body = req.body
      db('actions').insert(body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => { res.status(200).json({error: "there was an error"})})
  })




server.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})