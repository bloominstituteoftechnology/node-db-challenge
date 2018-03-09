exports.seed = function(knex, Promise) {
	return knex("contextAction")
		.del()
		.then(function() {
			return knex("contextAction").insert([
				{ contextID: 1, projectID: 1 },
				{ contextID: 1, projectID: 3 },
				{ contextID: 2, projectID: 1 },
				{ contextID: 2, projectID: 3 },
				{ contextID: 3, projectID: 2 },
				{ contextID: 3, projectID: 5 },
				{ contextID: 1, projectID: 5 },
				{ contextID: 5, projectID: 4 },
				{ contextID: 4, projectID: 6 },
				{ contextID: 6, projectID: 6 },
			]);
		});
};
