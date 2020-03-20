const db = require('../data/db_config');

module.exports = {
	findAllProjects,
	findById,
	findAllTasks,
	findAllProjectResources,
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
		.select(
			'projects.projects_name',
			'tasks.notes',
			'tasks.tasks_description',
			'tasks.tasks_completed'
		)
		.join('tasks', 'tasks.project_id', 'projects.id')
		.where('projects.id', projectId);
}

function findAllProjectResources(projectId) {
	return db('projects')
		.select(
			'projects.projects_name',
			'resources.resources_name',
			'resources.resources_description'
		)
		.join('resources', 'resources.project_id', 'projects.id')
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
