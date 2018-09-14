const express = require("express");
const knex = require("knex");
const server = express();

server.use(express.json());

const dbConfig = require("./knexfile.js");
const db = knex(dbConfig.development);

server.get("/api/projects", (req, res) => {
  db("projects")
    .select()
    .then(names => {
      res.status(200).json(names);
    })
    .catch(err => res.status(500).json(err));
});

server.get("/api/projects/:id", (req, res) => {
  const id = req.params.id;
  db("projects")
    .where("id", "=", id)
    .select()
    .then(names => {
      res.status(200).json(names);
    })
    .catch(err => res.status(500).json(err));
});

server.get("/api/projects/:id/actions", (req, res) => {
  const id = req.params.id;
  db("actions")
    .where({ Project_ID: id })
    .then(names => {
      res.status(200).json(names);
    })
    .catch(err => res.status(500).json(err));
});

server.post("/api/projects", (req, res) => {
  const {name, description} = req.body;
  console.log({name, description});
  db.insert({name, description})
    .into("projects")
    .then(names => {
      res.status(201).json(names);
    })
    .catch(err => res.status(500).json(err));
});

server.put("/api/projects/:id", (req, res) => {
  const {name, description} = req.body;
  const id = req.params.id;
  db("projects")
    .where("id", "=", id)
    .update({name, description})
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//Actions
server.get("/api/actions", (req, res) => {
    db("actions")
      .select()
      .then(notes => {
        res.status(200).json(notes);
      })
      .catch(err => res.status(500).json(err));
  });
  
  server.post("/api/actions", (req, res) => {
    const {notes, description, project_ID} = req.body;
    console.log({notes, description, project_ID});
    db.insert({notes, description, project_ID})
      .into("actions")
      .then(notes => {
        res.status(201).json(notes);
      })
      .catch(err => res.status(500).json(err));
  });

  server.put("/api/actions/:id", (req, res) => {
    const {notes, description} = req.body;
    const id = req.params.id;
    db("actions")
      .where("id", "=", id)
      .update({notes, description} )
      .then(count => {
        res.status(200).json(count);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  server.delete("/api/actions/:id", (req, res) => {
    const { id } = req.params;
  
    db("actions")
      .where({ id })
      .del()
      .then(count => {
        res.status(200).json(count);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

const port = 3000;
server.listen(port, function() {
  console.log(`\n Web API Listening on localhost:${port}\n`);
});
