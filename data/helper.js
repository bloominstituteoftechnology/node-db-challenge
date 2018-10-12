const db = require('./dbConfig');

function getProjects() {
    return db('projects')
}

function getActions() {
    return db('actions')
}

function getProject(id){
	return db('projects').where({id: id})
}

function getAction(id){
	return db('actions').where({id: id})
}

function addProject(project){
	return db('projects').insert(project)
}

function addAction(action){
	return db('actions').insert(action)
}

module.exports = {
    getProjects,
    getActions,
    getProject,
    getAction,
    addProject,
    addAction
}