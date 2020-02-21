
const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getTasksByProject,
    addProject,
}

function getProjects(){
    return db('projects')
}

function getTasksByProject(id){
    return db('tasks as t')
    .join('projects as p', 'p.id','t.project_id')
    .where('t.project_id',id)
    .groupBy('p.name')
    .select('p.name','p.description','t.*')
}

function addProject(project){
    return db('projects').insert(project, "id")
        
}