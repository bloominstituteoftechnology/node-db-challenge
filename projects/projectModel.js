const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
	getProjects,
	getProject,
	addProject,
	addAction
};

function getProjects() {
	return db('projects');
}

function getProject(id) {
	return db('projects')
		.where({ id })
		.then(([project]) => {
			db('actions')
				.where({ project_id: id })
				.select('id', 'description', 'notes', 'completed')
				.then(actions => {
					console.log({ ...project, actions }); // This looks fine in the terminal
					return { ...project, actions }; // I don't know how to do this.
				});
		});
}

function addProject(project) {
	return db('projects')
		.insert(project)
		.then(([id]) => id);
}

function addAction(action) {
	return db('actions')
		.insert(action)
		.then(([id]) => id);
}
