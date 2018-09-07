const db = require('./index.js')

function getProjects(){
	return db('projects')
}

function getProject(id){
	return db('projects').where({id: id})
}

function addProject(project){
	return db('projects').insert(project)
}

function getActions(){
	return db('actions')
}

function getAction(id){
	return db('actions').where({id: id})
}

function addAction(action){
	return db('actions').insert(action)
}

module.exports = {
	getProjects,
	getProject,
	addProject,
	getActions,
	getAction,
	addAction,
}