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
			if (project) {
				return db('actions')
					.where({ project_id: id })
					.select('id', 'description', 'notes', 'completed')
					.then(actions => {
						return { ...project, actions };
					});
			} else {
				return undefined;
			}
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
