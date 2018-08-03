const express = require('express');
const server = express();

const db = require("./data/db")

server.use(express.json());

const port = 8000;


//project api
server.get("/projects", (req, res) => {
  db.select().from('project')
  .then(response => {
    res.json({"Message": response});
  })
  .catch(error => {
   res.status(500).send({ error: "Server Error" })
 })
});
server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  let actions = {};
  db.select().from('actions').where('project_id', id)
    .then(response => {
      actions = response;
    })
    .catch(response => {
      console.log(response);
    })
  db.select().from('project').where('id', id)//innerJoin('actions', 'actions.project_id', 'project.id')
    .then(response => {
      let newResponse = response[0];
      Object.assign(newResponse, {actions})
      res.json(newResponse)
    })
    .catch(error => {
     res.status(500).send({ error: "Server Error" })
   })
})
server.post("/projects", (req, res) => {
  const { name, description, completed } = req.body;
  const toBool = completed == "true";
  db.insert({"name": name,
              "description" : description,
              "completed": toBool}).into('project')
    .then(response => (res.json(response)))
    .catch(error => {
     res.status(500).send({ error: "Server Error" })
   })
});
server.put("/projects/:id", (req, res) => {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    const toBool = completed == "true";
    db.update({"name": name,
                "description": description,
                "completed": toBool}).into('project').where('id', id)
      .then(response => (res.json(response)))
      .catch(error => {
       res.status(500).send({ error: "Server Error" })
     })
});
server.delete("/projects/:id", (req, res) => {
  const { id } = req.params
  db('project').where("id", id).delete()
    .then(response => (res.json(response)))
    .catch(error => {
     res.status(500).send({ error: "Server Error" })
   })
})

//actions api
server.get("/actions", (req, res) => {
  db.select().from('actions')
  .then(response => {
    res.json({response});
  })
  .catch(error => {
   res.status(500).send({ error: "Server Error" })
 })
});
server.post("/actions", (req, res) => {
  const { description, notes, completed, project_id } = req.body;
  const toBool = completed == "true";
  db.insert({"notes": notes,
              "description" : description,
              "completed": toBool,
              "project_id": project_id}).into('actions')
    .then(response => (res.json(response)))
    .catch(error => {
     res.status(500).send({ error: "Server Error" })
   })
});
server.put("/actions/:id", (req, res) => {
  const { id } = req.params;
  const { description, notes, completed, project_id } = req.body;
  const toBool = completed == "true";
  db.update({"notes": notes,
              "description" : description,
              "completed": toBool,
              "project_id": project_id}).into('actions').where('id', id)
    .then(response => (res.json(response)))
    .catch(error => {
     res.status(500).send({ error: "Server Error" })
   })
});
server.delete("/actions/:id", (req, res) => {
  const { id } = req.params
  db('actions').where("id", id).delete()
    .then(response => (res.json(response)))
    .catch(error => {
     res.status(500).send({ error: "Server Error" })
   })
})





server.listen(port, () => { console.log(`Server is running on port ${port}`)});
