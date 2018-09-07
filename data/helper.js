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

function updateProject(id, project){
	return db('projects').where({id: id}).update(project)
}

function deleteProject(id){
	return db('projects').where({id: id}).del()
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

function updateAction(id, action){
	return db('actions').where({id: id}).update(action)
}

function deleteAction(id){
	return db('actions').where({id: id}).del()
}

module.exports = {
	getProjects,
	getProject,
	addProject,
	updateProject,
	deleteProject,
	getActions,
	getAction,
	addAction,
	updateAction,
	deleteAction,
}