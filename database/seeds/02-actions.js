exports.seed = function(knex, Promise) {
	return knex("actions")
		.del()
		.then(function() {
			return knex("actions").insert([
				{ item: "Do Laundry", details: "Wash reds and whites separate." },
				{
					item: "Code Project Tracker",
					details: "Write software to track projects.",
					isComplete: true,
				},
				{ item: "LSx Swap", details: "Put new engine in car." },
				{ item: "Organize", details: "Make it so we can find all the things." },
				{ item: "Clean", details: "Dust and vaccuum." },
				{ item: "Workout", details: "Run, Bike and Swim." },
			]);
		});
};
