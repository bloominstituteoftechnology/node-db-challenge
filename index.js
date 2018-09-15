const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

//==================Data Table=========================//
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);
//==================Data Table=========================//

const server = express();

server.use(express.json());
server.use(helmet());

//===================End Points=======================//
//===========================project end points==========================//

server.get("/api/project", (req, res) => {
  db("projects")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot be retrieved" });
    });
});

server.get("/api/project/:id", async (req, res) => {
  // const id = req.params.id;

  // db("projects")
  //   .select()
  //   .where({ id })
  //   .first() // get result[0]
  //   .then(projects => {
  //     // a single object
  //     // let returnedProject = projects;
  //     console.log("ReturnProject ", projects);
  //     db("actions")
  //       .select()
  //       .where({ project_id: id })
  //       .then(actions => {
  //         // let returnedActions = actions;
  //         console.log("ReturnActions ", actions);
  //         // returnedProject.actions = returnedActions
  //         projects.actions = actions;
  //         // console.log(returnedProject)
  //         // res.send(200).json(returnedProject.actions = returnedActions);
  //         res.status(200).json(projects);
  //       });
  //     // console.log(returnedProject)
  //     // console.log("Final result ", returnedProject);
  //   })
  //   .catch(err => res.status(500).json(err));
  try {
    const projectObject = await db('projects').where({ project_id: req.params.id });
    const actionArray = await db('actions').where({ project_id: req.params.id });
    console.log('projectObject:', projectObject);
    console.log('action array:', actionArray);
    projectObject[0].actions = actionArray;
     res.status(200).json(projectObject);
}
catch (err) {
    console.log(err);
    res.status(500).send('oops');
}
});

server.post("/api/project", (req, res) => {
  const projects = req.body;

  db.insert(projects)
    .into("projects")
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Pass in correct credentials" });
    });
});

server.put("/api/project/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("projects")
    .where({ project_id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot update" });
    });
});

server.delete("/api/project/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where({ project_id: id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot delete" });
    });
});
//===========================project end points==========================//

//============================action end points=========================//
server.get("/api/action", (req, res) => {
  db("actions")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot be retrieved" });
    });
});

server.get("/api/action/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .select()
    .where({ action_id: id })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot retrieve with id" });
    });
});

server.post("/api/action", (req, res) => {
  const projects = req.body;

  db.insert(projects)
    .into("actions")
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Pass in correct credentials" });
    });
});

server.put("/api/action/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("actions")
    .where({ action_id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot update" });
    });
});

server.delete("/api/action/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ action_id: id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot delete" });
    });
});
//============================action end points=========================//
//===================End Points=======================//

server.listen(4000, () =>
  console.log(`\n=== Web API Running on Port:4000 ===\n`)
);
