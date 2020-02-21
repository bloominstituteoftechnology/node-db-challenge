
const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getTasksByProject,
    addProject,
    addTasks,
}

function getProjects(){
    return db('projects')
}

function getTasksByProject(id){
    return db('tasks as t')
    .join('projects as p', 'p.id','t.project_id')
    .where('t.project_id',id)
    
    .select( 'p.name as project name ', 'p.description as project description','t.*')
}

function addProject(project){
    return db('projects').insert(project, "id")
        
}

function addTasks(task) {
    return db('tasks').insert(task, "id")
}