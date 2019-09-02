const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getTasks
};

function getProjects() {
    return db('projects');
}

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.id')
        .select('t.description', 't.notes', 't.completed', 'p.name', 'p.description')
        
}