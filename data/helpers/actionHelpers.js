const db = require('../dbConfig.js');

module.exports = {
	getAll: function() {
		return db('actions');
	},
	getAction: function(id) {
		return db('actions')
			.select(
				'id',
				'action_description as description',
				'notes',
				'action_complete as complete'
			)
			.where('id', id);
	},
	getActionContexts: function(id) {
		return db('contexts')
			.select('context')
			.where('action_id', id);
	},
	getActionsByProjectId: function(projectId) {
		return db('actions')
			.select(
				'id',
				'action_description as description',
				'notes',
				'action_complete as complete'
			)
			.where('project_id', projectId);
	},
	insert: function(action) {
		return db('actions')
			.insert(action)
			.then(ids => ({
				id: ids[0]
			}));
	},
	update: function(id, change) {
		return db('actions')
			.where('id', id)
			.update(change);
	},
	remove: function(id) {
		return db('actions')
			.where('id', id)
			.del();
	}
};