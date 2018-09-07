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

server.use("/", (req, res) =>
  res
    .status(404)
    .json({ errorMessage: "You probably want to use a different endpoint" })
);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});