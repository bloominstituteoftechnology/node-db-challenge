const db = require('./index.js')

function getProjects(){
	return db('projects')
}

async function getProject(id){
	const projectArray = await db('projects').where({id: id})
	const actions = await db('actions').where({'project_id': id}).select('id', 'description', 'notes', 'complete')
	const { name, description, complete } = projectArray[0];
	const result = {
		id,
		name,
		description,
		complete,
		actions
	}
	return result;
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

async function getAction(id){
	const actionArray = await db('actions').where({id: id})
	const contexts = await db('context_for_action')
						.where({'action_id': id})
						.join('contexts', 'context_for_action.context_id', 'contexts.id')
						.select('contexts.name as context')
	const { notes, description, complete } = actionArray[0];
	const result = {
		id,
		description,
		notes,
		complete,
		contexts,
	}
	return result;
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