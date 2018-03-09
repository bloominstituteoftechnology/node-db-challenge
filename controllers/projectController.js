const knex = require('../database/db');

const projectDb = {
	getAll: function() {
		return knex('projects');
	},
	addproject: function(project) {
		return knex.insert(project).into('projects')
	},
	getById: function(id) {
		return knex('projects').where({ id });
	},
	destroy: function(id) {
		return knex('projects').where({ id }).del();
	},
	update: function(id, project) {
		return knex('projects').where({ id }).update(project)
	}
}

module.exports = projectDb;
