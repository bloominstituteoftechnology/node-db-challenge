const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getTasks,
    getResources,
    postProject,
    postTask,
    postResources
};

function getProjects() {
    return db('projects');
}

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.id')
        .select( 'p.name', 'p.description', 't.description', 't.notes', 't.completed')
        .then(tasks => 
            tasks.map(task => {
                if (task.completed == 1) {
                    task.completed = true;
                } else task.completed = false;
                return tasks;
            })
        )
}

function getResources() {
    return db('resources as r')
        .join('projects as p', 'p.id', 'r.id')
        .select('r.name', 'r.description', 'p.name', 'p.description')
}

function postProject(projects) {
    return db('projects').insert(projects)
}

function postTask(task) {
    return db('tasks').insert(task)
}

function postResources(resource) {
    return db('resources').insert(resource)
}