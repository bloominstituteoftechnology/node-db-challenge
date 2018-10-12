const db = require('../dbConfig.js');

module.exports = {
	addProject: function(project) {
		let query = db('projects')
		return query
			.insert(project)
			.then(id => ({ id: id }));
	},
};
