const db = require('../data/dbConfig');

module.exports={
    find,
    findById,
    findResources,
    addProject,
    addTask,
    findTask,
    addResource,
    connectResource,
    findProjectResource

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
        .select('tasks.description','tasks.notes','tasks.completed','projects.name')
        .join('projects','projects.id','tasks.projectID')
        .where("projectID", id);
}

function addResource(resource){
    return db.insert(resource,"*").into("resources");
}

function connectResource(resourceID,projectID){
    return db.insert({resourceID:resourceID,projectID:projectID},"*").into("projectDetails");
}

function findProjectResource(projectID){
    return db
        .select('resources.name','resources.decription','projects.name as projectName')
        .from("projectDetails")
        .join("resources","resources.id","projectDetails.resourceID")
        .join("projects", "projects.id","projectDetails.projectID")
        .where("projectDetails.projectID", projectID);
}