const db = require('../dbConfig.js');

module.exports = {
	getAllActions: function() {
		let query = db('actions')
		return query;
	},
	addAction: function(action) {
		const { project_id } = action;
		let projectQuery = db('projects as p')
		projectQuery
			.select()
			.where('p.id', project_id);

		const promises = [ projectQuery ];

		return Promise
			.all(promises)
			.then(promiseResults => {
				let [ projectQueryResults ] = promiseResults;
				if (!projectQueryResults.length) {
					return 'noProjectId'; // wil be error that is handled by API
				}
				let actionQuery = db('actions')
				return actionQuery
					.insert(action)
					.then(id => ({ id: id }));
			});
	},
};
