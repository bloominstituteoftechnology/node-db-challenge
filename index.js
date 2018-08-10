const express = require("express");
const actionsRoutes = require("./routes/actionsRoutes");
const morgan = require("morgan");

const server = express();

//* ROUTES
server.use("/actions", actionsRoutes);

server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("up and running...");
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
