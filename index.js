const express = require('express');
const server = express();

const db = require("./data/db")

server.use(express.json());

const port = 8000;

server.get("/projects", (req, res) => {
  db.select().from('project')
  .then(response => {
    res.json({"Message": response});
  })
  .catch(error => {
   res.status(500).send({ error: "Server Error" })
 })
});
server.post("/projects", (req, res) => {
  const { name, description, completed } = req.body;
  const toBool = completed == "true";
  db.insert({"name": name,
              "description" : description,
              "completed": toBool}).into('project')
    .then(response => (res.json(response)))
});
server.put("/projects/:id", (req, res) => {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    const toBool = completed == "true";
    db.update({"name": name,
                "description": description,
                "completed": toBool}).into('project').where('id', id)
      .then(response => (res.json(response)))
});







server.listen(port, () => { console.log(`Server is running on port ${port}`)});
