const db = require("knex")(require("../../knexfile").development);

module.exports = {
	getProject(id) {
		const project = db("projects")
			.where("id", id)
			.first();

		const actions = db("actions").where("project_id", id);

		return Promise.all([project, actions]).then(results => {
			let [project, actions] = results;
			let result = { project, actions };
			return result;
		});
	},
};
