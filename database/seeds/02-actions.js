exports.seed = function(knex, Promise) {
	return knex("actions")
		.del()
		.then(function() {
			return knex("actions").insert([
				{ item: "Organize", notes: "Sort all the things.", projectID: 1 },
				{
					item: "Pack",
					notes: "Box up and prepare to move. Load in vehicle.",
					projectID: 1,
				},
				{
					item: "Unload",
					notes: "Remove from vehicle and move inside.",
					projectID: 1,
				},
				{ item: "Organize", notes: "Gather requirements, etc.", projectID: 2 },
				{
					item: "Code",
					notes: "Write software.",
					projectID: 2,
					isComplete: true,
				},
				{
					item: "Action 6",
					notes: "Notes for Action 6.",
					projectID: 3,
					isComplete: true,
				},
				{
					item: "Action 6",
					notes: "Notes for Action 6.",
					projectID: 3,
					isComplete: true,
				},
				{
					item: "Action 7",
					notes: "Notes for Action 7.",
					projectID: 4,
					isComplete: true,
				},
				{
					item: "Action 8",
					notes: "Notes for Action 8.",
					projectID: 4,
					isComplete: true,
				},
				{
					item: "Action 9",
					notes: "Notes for Action 9.",
					projectID: 5,
					isComplete: true,
				},
				{
					item: "Action 10",
					notes: "Notes for Action 10.",
					projectID: 5,
					isComplete: true,
				},
				{
					item: "Action 11",
					notes: "Notes for Action 11.",
					projectID: 3,
					isComplete: true,
				},
				{
					item: "Action 12",
					notes: "Notes for Action 12.",
					projectID: 6,
					isComplete: true,
				},
				{
					item: "Action 13",
					notes: "Notes for Action 13.",
					projectID: 6,
					isComplete: true,
				},
			]);
		});
};
