const db = require('../db-config');

 function addProject(project_id) {
    return db('project').insert(project_id)
}

 function addResource(resource_id) {
    return db('resource').insert(resource_id)
}

function addTask(task_id) {
    return db('task').insert(task_id)
}

function find() {
    return db('project')
 }

 function findByResId(id) {
    return db('resource').where({resource_id})
}

function findByTaskId(id) {
    return db('task').where({task_id})
}


module.exports = { 
    addProject,
    addResource,
    addTask,
    find,
    findByTaskId,
    findByResId
}