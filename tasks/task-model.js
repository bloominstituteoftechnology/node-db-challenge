const db = require('../data/db-config')

module.exports = {
    getAll,
    getById,
    add
}

function getAll() {
    return db("tasks")
        .join("projects", "projects.id", "tasks.project_id")
        .select("tasks.id", "tasks.task_description", "tasks.task_notes",
            "tasks.completed", "projects.proj_name", "projects.proj_description")
}

function getById() {
    return db('task')
        .join("projects", "projects.id", "tasks.project_id")
        .select("tasks.id", "tasks.task_description", "tasks.task_notes",
            "tasks.completed", "projects.proj_name", "projects.proj_description")
        .where('tasks.id', id)
}

async function add(newTask) {
    const item = await db("tasks").insert(newTask)
    return item
}