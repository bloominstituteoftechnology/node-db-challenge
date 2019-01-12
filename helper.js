const express = require("express");
const knex = require("knex");

const db = require("./knexfile.js");

module.exports = {
    addProject,
    addAction,
    getProject,
}

function addProject(project) {
    return db("projects")
        .insert(project)
        .then(ids => ({id: ids[0]}));
}

function addAction(action) {
    return db("actions")
        .insert(action)
        .then(ids => ({id: ids[0]}));
}

function getProject(id) {
    return db("actions as a")
        .join("projects as p", "p.id", "a.project_id")
        .where("a.project_id", id)
} 