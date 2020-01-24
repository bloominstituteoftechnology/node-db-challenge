const db = require('./data/db-config');


module.exports = {
    listResources,
    addResources,
    listprojects,
    addprojects,
    listTask,
    addTask,
    listprojectsById
};

function listResources(){
    return db("resource")
}

function addResources(resource){
    return db("resource")
        .insert(resource)
}

function listprojects(){
    return db("projects")
}

function listprojectsById(userId){
    return db("projects")
    .where({id : userId})
}

function addprojects(project){
    return db("projects")
        .insert(project)
}

function listTask(){
    return db("task")
    .join("projects", "projects.id", "task.project_id")
     .select("projects.project_name", "projects.description", "task.*")
}

function addTask(task){
    return db("task")
        .insert(task)
}