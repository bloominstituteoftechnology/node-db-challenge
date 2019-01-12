const express = require("express");
const DB = require("../data/helpers/");
const SERVER = express();
const PORT = process.env.PORT || 3456;

SERVER.use(express.json());

// ADD A NEW PROJECT TO THE DB
SERVER.post("/api/projects", (req, res) => {});

// ADD A NEW ACTION TO A PROJECT
SERVER.post("/api/projects/:id/actions", (req, res) => {});

// GET A PROJECT BY ID
SERVER.get("/api/projects/:id", (req, res) => {});

SERVER.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
