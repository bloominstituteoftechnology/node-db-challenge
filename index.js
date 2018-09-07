const express = require("express");
const dbhelpers = require("./dbhelpers/helpers");


const server = express();

server.use(express.json());


server.get("/api/:whichtable", async (req, res) => {
  let table = "projects";
  if(req.params.whichtable ==="actions"){
    table = "actions";
  }
  try {
    const results = await dbhelpers.get(null,table);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get("/api/projects/:ID", async (req, res) => {

  try {
    const results = await dbhelpers.getProject(req.params.ID);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.post("/api/:whichtable", async (req, res) => {
  let table = "projects";
  if(req.params.whichtable ==="actions"){
    table = "actions";
  }
  try {
    const results = await dbhelpers.insert(req.body,table);
    res.status(200).json({ results });
  } catch (err) {
    
    res.status(500).json(err);
  }
});

server.put("/api/:whichtable/:ID", async (req, res) => {
  let table = "projects";
  if(req.params.whichtable ==="actions"){
    table = "actions";
  }
  if (!Number(req.params.ID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
    return;
  }
  try {
    const results = await dbhelpers.edit(req.params.ID,req.body,table);
    res.status(200).json({ results });
  } catch (err) {
    
    res.status(500).json(err);
  }

});

server.delete("/api/:whichtable/:ID", async (req, res) => {
  let table = "projects";
  if(req.params.whichtable ==="actions"){
    table = "actions";
  }
  if (!Number(req.params.ID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
  }
  
  try {
    const results = await dbhelpers.delete(req.params.ID, table);
    if (results) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(500).json({ errorMessage: "Invalid ID for removal" });
    }
  } catch (err) {
    
    res.status(500).json(err);
  }
});

server.use("/", (req, res) =>
  res
    .status(404)
    .json({ errorMessage: "You probably want to use a different endpoint" })
);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});