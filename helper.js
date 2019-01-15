const express = require("express");
const knex = require("knex");

const dbConfig = require("./knexfile.js");

const db = knex(dbConfig.development);

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
        .join("projects as p", "p.id", "a.projects_id")
        .where("a.projects_id", id)
} 