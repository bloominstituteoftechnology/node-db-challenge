exports.seed = function(knex, Promise) {
	return knex("contexts")
		.del()
		.then(function() {
			return knex("contexts").insert([
				{ context: "At Home" },
				{ context: "At Work" },
				{ context: "In Home Office" },
				{ context: "In Garage" },
				{ context: "At the Gym" },
				{ context: "At the Storage Unit" },
			]);
		});
};
