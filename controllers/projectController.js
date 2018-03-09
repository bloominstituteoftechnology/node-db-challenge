const knex = require('../database/db');

const projectDb = {
	getAll: function() {
		return knex('projects');
	},
	addproject: function(project) {
		return knex.insert(project).into('projects')
	},
	getActions: function(id) {
		return (
			knex('actions as a').where({ projectId: id })
			.select('a.id', 'a.description', 'a.notes', 'a.complete')
		);
	},
	getContexts: function(id) {
		return (
			knex('project_contexts as pc').where({ projectId: id })
			.join('contexts as c', 'pc.contextId', 'c.id')
			.select('c.id', 'c.context')
		);
	},
	getById: function(id) {
		let query = knex('projects as p')
		query
			.select('p.id', 'p.name', 'p.description', 'p.complete')
			.where('p.id', id)

		const promises = [query, this.getActions(id), this.getContexts(id)];
		return Promise.all(promises).then(function(results) {
			let [projects, actions, contexts] = results;
			let project = projects[0];
			project.actions = actions;
			project.contexts = contexts;

			return project;
		});
	},
	destroy: function(id) {
		return knex('projects').where({ id }).del();
	},
	update: function(id, project) {
		return knex('projects').where({ id }).update(project)
	}
}

module.exports = projectDb;
