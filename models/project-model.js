const db = require('../db-config.js')

function find(){
    return db('projects')
}

function getTask(project_id){
    return db('task').where({project_id})

}

function getResource(project_id){
    return db('resources').where({project_id})
}

function addProject(payload){
    return db.insert('projects').insert(payload)
}


function addTask(payload){
    return db.insert('task').insert(payload)
}


module.exports ={
    find,
    getTask,
    getResource,
    addProject,
    addTask
}