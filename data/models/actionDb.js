const db = require('../dbConfig.js');

module.exports = {
	getAllActions: function() {
		let query = db('actions')
		return query;
	},
	getAction: function(id) {
		let query = db('actions as a')
		return query
			.select()
			.where('a.id', id);
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
	updateAction: function(id, action) {
		// let query = db('actions as a')
		// return query
		// 	.update(action)
		// 	.where('a.id', id);
		

		if (action.project_id) {
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
					let actionQuery = db('actions as a')
					return actionQuery
						.update(action)
						.where('a.id', id);
				});
		}
	},
	deleteAction: function(id) {
		let query = db('actions as a')
		return query
			.del()
			.where('a.id', id);
	},
};
