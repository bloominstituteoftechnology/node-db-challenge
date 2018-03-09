exports.seed = function(knex, Promise) {
	return knex("contextAction")
		.del()
		.then(function() {
			return knex("contextAction").insert([
				{ contextID: 1, actionID: 1 },
				{ contextID: 1, actionID: 2 },
				{ contextID: 2, actionID: 1 },
				{ contextID: 2, actionID: 3 },
				{ contextID: 3, actionID: 4 },
				{ contextID: 3, actionID: 5 },
				{ contextID: 4, actionID: 6 },
				{ contextID: 5, actionID: 7 },
				{ contextID: 4, actionID: 8 },
				{ contextID: 6, actionID: 9 },
			]);
		});
};
