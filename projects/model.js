const db = require('../data/db_config');

module.exports = {
	findAllProjects,
	findById,
	findAllTasks,
	findAllResources,
	addProject,
	addTask,
	// updateProject,
	// updateTask,
	// updateResources,
	addResources,
	removeProject
	// removeTask,
	// removeResources
};

async function findAllProjects() {
	let rows = await db('projects');

	return rows;
}

function findById(id) {
	return db
		.select('*')
		.from('projects')
		.where({ id })
		.first();
}

function findAllTasks(projectId) {
	return db('projects')
		.select('projects.name', 'tasks.description', 'tasks.completed')
		.join('tasks', 'tasks.project_id', 'projects.id')
		.where('projects_id', projectId);
}

function findAllResources(projectId) {
	return db('projects')
		.select('projects.name', 'resources.description')
		.join('resources', 'resources.project_id', 'project.id')
		.where('projects.id', projectId);
}

function addProject(project) {
	return db('projects').insert(project);
}

function addTask(task) {
	return db('tasks').insert(task);
}

function addResources(resource) {
	return db('resources').insert(resource);
}

// PUT REQUESTS

function removeProject(id) {
	return db('projects')
		.where({ id })
		.delete();
}

// REMOVE TASKS
// REMOVE RESOURCES
