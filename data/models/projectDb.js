const projectDb = require('../dbConfig.js');

module.exports = {
	addProject: function(project) {
		let query = projectDb('projects')
		return query
			.insert(project)
			.then(id => ({ id: id }));
	},
};
