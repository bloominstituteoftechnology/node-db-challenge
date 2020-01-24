const db = require ('../data/db-config')

module.exports = {
    getAll,
    getById,
    add
}

function getAll() {
    return db('projects')
}

function getById(id) {
    return db('projects')
        .join('tasks', 'tasks.project_id', 'projects.id')
        .where('projects.id', id)
}