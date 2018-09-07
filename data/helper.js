const db = require('./index.js')

function getProjects(){
	return db('projects')
}

function getProject(id){
	return db('projects').where({id: id})
}

function getActions(){
	return db('actions')
}

function getAction(id){
	return db('actions').where({id: id})
}

module.exports = {
	getProjects,
	getProject,
	getActions,
	getAction,
}