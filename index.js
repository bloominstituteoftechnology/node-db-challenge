const db = require('./data/db_model');
const express = require('express');

const server = express();

server.use(express.json());

// endpoints here
const port = 3000; 

server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

server.get("/api/projects/",
    (req,res) => db.find("projects").then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch projects"}))
);
server.get("/api/actions/",
    (req,res) => db.find("actions").then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch actions"}))
);

server.get("/api/projects/:id",
    (req,res) => db.find("projects", req.params.id).then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch projects"}))
);
server.get("/api/actions/:id",
    (req,res) => db.find("actions", req.params.id).then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch actions"}))
);

server.post("/api/actions/",
    (req,res) => db.add("actions", req.body).then(result => res.status(200).json({id: result})).catch(err=>res.status(500).json({error: err, message:"could not create actions"}))
);
server.post("/api/projects/",
    (req,res) => db.add("projects",  req.body).then(result => {delete result.actions; res.status(200).json({id: result})})//.catch(err=>res.status(500).json({error: err, message:"could not create projects"}))
);