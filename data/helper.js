const db = require('./index.js')

function getProjects(){
	return db('projects')
}

function getActions(){
	return db('actions')
}

module.exports = {
	getProjects,
	getActions,
}