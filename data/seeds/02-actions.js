exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('actions').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('actions').insert([
				// Actions for Project #1
				{
					description: 'Action #1 for Project #1',
					notes: 'Action notes go here.',
					completed: false,
					project_id: 1,
				},
				{
					description: 'Action #2 for Project #1',
					notes: 'Action notes go here.',
					completed: false,
					project_id: 1,
				},
				// Actions for Project #2
				{
					description: 'Action #1 for Project #2',
					notes: 'Action notes go here.',
					completed: true,
					project_id: 2,
				},
				{
					description: 'Action #2 for Project #2',
					notes: 'Action notes go here.',
					completed: true,
					project_id: 2,
				},
				// Actions for Project #3
				{
					description: 'Action #1 for Project #3',
					notes: 'Action notes go here.',
					completed: false,
					project_id: 3,
				},
			]);
		});
};
