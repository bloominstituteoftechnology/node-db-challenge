const express = require("express");

const router = require("./schemes/scheme-router.js");

app = express();
app.use(express.json());
app.use("/api", router);

module.exports = app;
