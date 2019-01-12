const express = require ('express')
const knex = require('knex')
const server = express();
const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development); 
const PORT = 5675;

server.use(express.json());

server.get("/", (req, res) => {
  res.send(
    "Hello this is:<h1>Sprint Challenge - RDBMS</h1><h3>by Rob Salzberg</h3>"
  );
});

server.post('/api/projects', (req, res) => {
  const body = req.body
  db('projects').insert(body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => { res.status(500).json({error: "there was an error"})})
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
