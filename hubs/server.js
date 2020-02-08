const express = require("express");
console.log("server.js...");

const apiRouter = require("../routersGen/routers.jsx");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "API Working!!!!!\n" });
});

server.use(logger);
server.use(express.json());
server.use("/api", apiRouter);

function logger(req, res, next) {
  console.log(`${req.method} - ${req.url} - ${Date(Date.now())}`);
  next();
}

module.exports = server;
