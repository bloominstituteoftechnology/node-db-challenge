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

	getActionsContext(id) {
		const actionContext = db
			.select("*")
			.from("actions_context")
			.join("context", "context_id", "context.id")
			.where("action_id", id);

		const action = db("actions")
			.where("id", id)
			.first();

		return Promise.all([action, actionContext]).then(results => {
			let [action, actionContext] = results;
			let result = { ...action, actionContext };
			return result;
		});
	},
};
