exports.seed = function(knex, Promise) {
	return knex("projects")
		.del()
		.then(function() {
			return knex("projects").insert([
				{ name: "Happy Home", description: "Striving for domestic bliss." },
				{
					name: "Fit as a fiddle",
					description: "Kicking butt, taking names.",
					isComplete: true,
				},
				{ name: "Richie Rich", description: "High income from the man." },
				{ name: "Project 4", description: "Description of Project 4." },
				{ name: "Project 5", description: "Description of Project 5." },
				{ name: "Project 6", description: "Description of Project 6." },
			]);
		});
};
