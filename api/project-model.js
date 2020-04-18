const db= require('../data/db-config');

function get(){
    return db("projects")
}
function getById(id){
    return db("projects").where({id}).first()
}

function add (project){
    return db("projects")
    .insert(project, "id")
    .then(([id])=>getById(id))
}

function addTask(taskData, project_id){
    return db("tasks")
    .where({project_id})
    .insert({project_id: project_id, ...taskData })
}
module.exports ={
    get,
    getById,
    add,
    addTask
}