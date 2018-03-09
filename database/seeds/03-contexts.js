exports.seed = function(knex, Promise) {
	return knex("contexts")
		.del()
		.then(function() {
			return knex("contexts").insert([
				{ context: "At Home" },
				{ context: "At Work" },
				{ context: "At the Storage Unit" },
				{ context: "In Home Office" },
				{ context: "In Garage" },
				{ context: "At the Gym" },
			]);
		});
};
