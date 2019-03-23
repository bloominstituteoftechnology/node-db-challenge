const db = require('../dbConfig.js');

module.exports = {
	getAll: function() {
		return db('projects');
	},
	getProject: function(projectId) {
		return db('projects')
			.where('id', projectId);
	},
	insert: function(project) {
		return db('projects')
			.insert(project)
			.then(ids => ({
				id: ids[0]
			}));
	},
	update: function(id, change) {
		return db('projects')
			.where('id', id)
			.update(change);
	},
	remove: function(id) {
		return db('actions')
			.where({ project_id: id })
			.del()
			.then(response => {
				return db('projects')
					.where({ id: id })
					.del();
			});
	}
};