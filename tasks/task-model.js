const db = require("../data/db-config.js")
const knex = require("knex")

module.exports = {
    find,
    insert
}

function find(projId) {
    return db("tasks as t")
    .where("t.projectId", knex.raw("?", [projId]))
}

function insert(task) {
    return db("tasks").insert(task)
}