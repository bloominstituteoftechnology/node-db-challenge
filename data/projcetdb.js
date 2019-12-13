const db = require('../data/dbConfig');

module.exports={
    find,
    findById,
    findResources,
    addProject,
    addTask,
    findTask,
    addResource,
    connectResource

}

function find(){
    return db("projects");
}

function findById(id){
    return db("projects").where("id", id).first();
}

function findResources(){
    return db("resources");
}

function addProject(project){
    return db.insert(project,"*").into("projects");
}

function addTask(task){
    return db.insert(task,"*").into("tasks");
}

function findTask(id){
    return db("tasks")
        .select('tasks.description','tasks.notes','projects.name')
        .join('projects','projects.id','tasks.projectID')
        .where("projectID", id);
}

function addResource(resource){
    return db.insert(resource,"*").into("resources");
}

function connectResource(resourceID,projectID){
    return db.insert({resourceID:resourceID,projectID:projectID},"*").into("projectDetails");
}