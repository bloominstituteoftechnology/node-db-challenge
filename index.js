const express = require("express");
const helmet = require("helmet");
const server = express();
const PORT = process.env.PORT || 9000;
const projectsRoutes = require("./projectsRoutes.js");

server.use(helmet());
server.use(express.json());

// sanity check endpoint
server.get("/", (req, res) => {
  res.send("It's Alive");
});

server.use("/api/projects", projectsRoutes);

server.listen(PORT, () =>
  console.log("\nAPI running on http://localhost:${PORT} ===\n")
);
