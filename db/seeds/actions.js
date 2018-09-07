exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("actions")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("actions").insert([
				{
					description: "Okay nerd, step 1 I gotta learn to migrate",
					notes: "knex commands from the terminal, sonny",
					completed: false,
					project_id: 1,
				},
				{
					description:
						"Listen bro, now you gotta seed stuff so you can see stuff",
					notes: "knex some more friendo",
					completed: false,
					project_id: 1,
				},
				{
					description: "Okay sir let's do some CRUD verbs",
					notes: "GET stuff",
					completed: false,
					project_id: 2,
				},
				{
					description:
						"Okay sir let's do some more CRUD verbs for fun and profit",
					notes: "POST stuff",
					completed: false,
					project_id: 2,
				},
				{
					description: "Find out what Node is doing",
					notes:
						"Let's peel back some of these libraries and look at Node by itself",
					completed: false,
					project_id: 3,
				},
				{
					description: "Give your OS commands from Node",
					notes: "This is where it gets real",
					completed: false,
					project_id: 3,
				},
			]);
		});
};
