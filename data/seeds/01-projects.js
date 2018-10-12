exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('projects').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('projects').insert([
				{
					name: 'Project #1',
					description: 'Project #1 Description',
					completed: false
				},
				{
					name: 'Project #2',
					description: 'Project #2 Description',
					completed: true
				},
				{
					name: 'Project #3',
					description: 'Project #3 Description',
					completed: false
				},
			]);
		});
};
