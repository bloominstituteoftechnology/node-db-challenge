const knex = require('../database/db');

const actionDb = {
	getAll: function() {
		return knex('actions');
	},
	addaction: function(action) {
		return knex.insert(action).into('actions')
	},
	getById: function(id) {
		return knex('actions').where({ id });
	},
	destroy: function(id) {
		return knex('actions').where({ id }).del();
	},
	update: function(id, action) {
		return knex('actions').where({ id }).update(action)
	}
}

module.exports = actionDb;
