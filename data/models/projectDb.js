const db = require('../dbConfig.js');

module.exports = {
	getAllProjects: function() {
		let query = db('projects')
		return query;
	},
	getProject: function(id) {
		let projectQuery = db('projects as p')
		projectQuery
			.select()
			.where('p.id', id);

		let actionQuery = db('actions as a')
		actionQuery
			.select('a.id', 'a.description', 'a.notes', 'a.completed')
			.where('a.project_id', id);

		const promises = [ projectQuery, actionQuery ];

		return Promise
			.all(promises)
			.then(promiseResults => {
				let [ projectQueryResults, actionQueryResults ] = promiseResults;
				let result = projectQueryResults[0];
				if (!projectQueryResults.length) {
					return 'noProjectId'; // wil be error that is handled by API
				}
				if (!actionQueryResults.length) {
					result.actions = [];
				} else {
					result.actions = actionQueryResults.map(action => action);
					for (let i = 0; i < result.actions.length; i++) {
						result.actions[i].completed = result.actions[i].completed ? true : false;
					}
				}
				result.completed = result.completed ? true : false;
				return result;
			});
	},
	addProject: function(project) {
		let query = db('projects')
		return query
			.insert(project)
			.then(id => ({ id: id }));
	},
	updateProject: function(id, project) {
		let query = db('projects as p')
		return query
			.update(project)
			.where('p.id', id);
	},
	deleteProject: function(id) {
		let query = db('projects as p')
		return query
			.del()
			.where('p.id', id);
	},
};
