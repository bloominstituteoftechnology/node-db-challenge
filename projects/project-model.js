
const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getTasksByProject,
}

function getProjects(){
    return db('projects')
}

function getTasksByProject(id){
    return db('tasks as t')
    .join('projects as p', 'p.id','t.project_id')
    .where('t.project_id',id)
    .select('p.name','p.description','t.*')
}