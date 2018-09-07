exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("context")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("context").insert([
				{
					context: "On terminal", //1
				},
				{
					context: "In VSCode", //2
				},
				{
					context: "In Node", //3
				},
				{
					context: "On my computer", //4
				},
				{
					context: "Internet Connection", //5
				},
			]);
		});
};
