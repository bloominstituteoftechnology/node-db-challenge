exports.seed = function(knex, Promise) {
	return knex("contextActionProject")
		.del()
		.then(function() {
			return knex("contextActionProject").insert([
				{ contextID: 1, actionID: 2, projectID: 6 },
				{ contextID: 2, actionID: 1, projectID: 5 },
				{ contextID: 1, actionID: 3, projectID: 1 },
				{ contextID: 3, actionID: 1, projectID: 4 },
				{ contextID: 1, actionID: 4, projectID: 3 },
				{ contextID: 4, actionID: 1, projectID: 1 },
				{ contextID: 1, actionID: 5, projectID: 2 },
				{ contextID: 5, actionID: 1, projectID: 3 },
				{ contextID: 1, actionID: 6, projectID: 4 },
				{ contextID: 6, actionID: 1, projectID: 5 },
			]);
		});
};
