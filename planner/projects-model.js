const db = require('../data/dbConfig.js')

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
        .join("tasks", "tasks.projects_id", "projects.id")
        .where("projects.id", id)
}

function add(data) {
    return db("projects").insert(data)

}

