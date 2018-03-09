exports.seed = function(knex, Promise) {
	return knex("projects")
		.del()
		.then(function() {
			return knex("projects").insert([
				{ name: "Happy Home", description: "Striving for domestic bliss." },
				{
					name: "Code App",
					description:
						"Making the world a better place through better software.",
					isComplete: true,
				},
				{ name: "Project 3", description: "Description of Project 3." },
				{ name: "Project 4", description: "Description of Project 4." },
				{ name: "Project 5", description: "Description of Project 5." },
				{ name: "Project 6", description: "Description of Project 6." },
			]);
		});
};
