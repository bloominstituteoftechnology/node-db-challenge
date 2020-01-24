const db = require('../data/dbConfig.js')

module.exports = {
   findAll,
   add
}

function findAll() {
    return db("tasks")
        .join("projects", "projects.id", "tasks.projects_id")
        .select("tasks.id", "tasks.description", "tasks.notes", "tasks.completed", "projects.name", "projects.description")
}

function add(data) {
    return db("tasks").insert(data)

}

