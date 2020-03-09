const db = require('../data/knex-config');

module.exports = {
	//Project CRUD
	getProjects,
	getProjectsById,
	addProject,
	updateProject,
	removeProject,

	//Resources CRUD
	getResources,
	addResource,
	updateResource,
	removeResource,

	//Tasks Crud
	getTasks,
	addTask,
	updateTask,
	removeTask
};

//Project CRUD MODEL
function getProjects() {
	return db('projects');
}

function getProjectsById(id) {
	return db('projects').where('id', id).first();
}

function addProject(project) {
	return db('projects').insert(project).then((id) => {
		return findById(id[0]);
	});
}

function updateProject(changes, id) {
	return db('projects').update(changes).where(id);
}

function removeProject(id) {
	return db('projects').where('id', id).del();
}

//Resource CRUD MODEL
function getResources() {
	return db('resources');
}

function addResource(resource) {
	return db('resources').insert(resource);
}

function updateResource(changes, id) {
	return db('resources').update(changes).where(id);
}

function removeResource(id) {
	return db('resources').where('id', id).del();
}

//TASKS CRUD MODEL
function getTasks(id) {
	return db('projects')
		.join('tasks', 'tasks.project_id', 'projects.id')
		.select('*')
		.where({ 'tasks.project_id': id });
}

function addTask(task) {
	return db('tasks').insert(task);
}

function updateTask(changes, id) {
	return db('tasks').update(changes).where(id);
}

function removeTask(id) {
	return db('tasks').where('id', id).del();
}

//LONELY FUNCTION :( , but the most useful one! SO FUCK ALL THE OTHER FUNCTION! YEAH FUNCTION POWER!!!!!!!
function findById(id) {
	return db('projects').where({ id }).first();
}
