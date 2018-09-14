const express = require("express");
const server = express();
const knex = require("knex");
const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

server.use(express.json());

//post for Projects
server.post("/projects", (req, res) => {
  const projects = req.body;
  db("projects")
    .insert(projects)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

//get all projects
server.get("/projects", (req, res) => {
  db("projects")
  .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

//get projects by id
server.get("/projects/:id", (req, res) => {
  const id = req.params.id;

  db("projects")
    .select()
    .where("id", "=", id)
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: "No project found" });
      }
    })
    .catch(err => res.status(500).json(err));
});

//put for projects
server.put("/projects/:id", (req, res) => {
    const changes = req.body;
    const id = req.params.id;
  
    db("projects")
      .where("id", "=", id)
      .update(changes)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  });

//Delete for Projects
server.delete("/projects/:id", (req, res) => {
    const id = req.params.id;
    db("projects")
    .where("id", "=", id)
    .del(id)
      .then(projects => {
        res.status(200).json(`Deleted Project with id: ${id}`);
      })
      .catch(err => res.status(500).json(err));
  });
  



//post for Actions
server.post("/projects/:id/actions", (req, res) => {
  const actions = req.body;
  db("actions")
    .insert(actions)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});




//get actions for each project
server.get("/projects/:id/actions", (req, res) => {
  db("actions")
    .select()
    .join("actions", "projects.id", "=", "actions.project_id")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});


//put for Actions
server.put("/projects/:id/actions", (req, res) => {
    const changes = req.body;
    const id = req.params.id;
  
    db("actions")
      .where("id", "=", id)
      .update(changes)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
})


//Delete for actions
server.delete("/projects/:id/actions", (req, res) => {
    const id = req.params.id;
    db("actions")
    .where("id", "=", id)
    .del(id)
    .then(actions => {
      res.status(200).json(`Deleted Action with id ${id}`);
    })
    .catch(err => res.status(500).json(err));
});





server.listen(8000, () => console.log("======API running on 8000======"));
