const db = require('../db-config')

module.exports = {
    findAll,
    findById,
    add
}

function findAll() {
    return db("tasks")
        .join("projects", "projects.id", "tasks.project_id")
        .select("tasks.id", "tasks.task_description", "tasks.notes", "tasks.completed", "projects.project_name", "projects.project_description")
}

function findById(id) {
    return db("tasks")
        .join("projects", "projects.id", "tasks.project_id")
        .select("tasks.id", "tasks.task_description", "tasks.notes", "tasks.completed","projects.project_name", "projects.project_description")
        .where("tasks.id", id)
}

async function add(data) {
    const item = await db("tasks").insert(data)
    return item
}