const knex = require('../database/db');

const contextDb = {
	getAll: function() {
		return knex('contexts');
	},
	addcontext: function(context) {
		return knex.insert(context).into('contexts')
	},
	getById: function(id) {
		return knex('contexts').where({ id });
	},
	destroy: function(id) {
		return knex('contexts').where({ id }).del();
	},
	update: function(id, context) {
		return knex('contexts').where({ id }).update(context)
	}
}

module.exports = contextDb;
