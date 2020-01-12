const db = require('../db-config')

module.exports = {
    findAll,
    findById,
    add
}

function findAll() {
    return db("projects")
}

function findById(id) {
    return db("projects")
        .join("tasks", "tasks.project_id", "projects.id")
        .where("projects.id", id)
}

async function add(data) {
    return db("projects").insert(data)
}