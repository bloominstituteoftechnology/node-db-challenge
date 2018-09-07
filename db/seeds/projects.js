exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("projects")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("projects").insert([
				{
					name: "L2 Database",
					description: "databasin and so forth and whatnot",
					completed: false,
				},
				{
					name: "L2 Endpoint",
					description:
						"Where we get our stuff from and so forth and whatnot",
					completed: false,
				},
				{
					name: "L2 Node",
					description:
						"How we talk to the operating system anyway and so forth and whatnot",
					completed: false,
				},
			]);
		});
};
