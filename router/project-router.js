const express = require("express");

const Projects = require("./project-model,js");

const router = express.Router();

router.get("/", (request, response) => {});

router.get("/:id", (request, response) => {});

router.get("/:id/resources", (request, response) => {});

router.get("/:id/tasks", (request, response) => {});

router.post("/", (request, response) => {});

router.post("/:id/resources", (request, response) => {});

router.post("/:id/tasks", (request, response) => {});

module.exports = router;
