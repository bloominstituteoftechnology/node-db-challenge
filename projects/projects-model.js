const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
    findTasks,
    addTask
}

function find() {
    return db('projects')
}
function findById(id) {
    return db('projects')
    .where({id})
    .first()
}

function add(project){
    return dB('projects')
    .insert(project, 'id')
    .then(([id])=>{
        return findById(id)
    })
    .catch(error=>{
        console.log(error)
    })
} 

function findTasks(project_id) {
    return db('tasks as t')
    .where({project_id})
    .join('projects as p', 't.project_id', 'p.id')
    .select('p.name as project', 'p.desc as project_desc', 't.desc as task_desc', 't.notes as task_notes', 't.finished as task_status')
}

function addTask(task, id) {
    return db('tasks')
    .insert(task, 'id')
    .then(newTask => {
        return newTask
    })
    .catch(error => [
        console.log(error)
    ])
}