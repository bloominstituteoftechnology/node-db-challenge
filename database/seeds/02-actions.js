exports.seed = function(knex, Promise) {
	return knex('actions')
		.del() // delete all actions's
		.then(function() {
			return knex('actions').insert([
				{
					id: 1,
					projectId: 1,
					description: 'Mow the lawn', // Action 1
					notes: 'Cover pool ahead of time',
					completed: true
				},
				{
					id: 2,
					projectId: 1,
					description: 'Clean the pool', // Action 2
					notes: 'Check chemical levels, add if needed, scrub walls',
					completed: false
				},
				{
					id: 3,
					projectId: 1,
					description: 'Organize the Garage', // Action 3
					notes: 'Build shelving and organize',
					completed: false
				},
				//
				{
					id: 4,
					projectId: 2,
					description: 'Make Backup', // Action 4
					notes: 'Make a backup of the current system',
					completed: true
				},
				{
					id: 5,
					projectId: 2,
					description: 'Install the update', // Action 5
					notes: 'Install update from CD',
					completed: false
				},
				{
					id: 6,
					projectId: 2,
					description: 'Update Drivers', // Action 6
					notes: 'Update all drivers for latest update',
					completed: false
				},
				//
				{
					id: 7,
					projectId: 3,
					description: 'Create Seeds', // Action 7
					notes: 'Create info to be inputted to database',
					completed: true
				},
				{
					id: 8,
					projectId: 3,
					description: 'Create Migrations', // Action 8
					notes: 'Create the skeleton of the database',
					completed: false
				},
				{
					id: 9,
					projectId: 3,
					description: 'Build out server with CRUD', // Action 9
					notes: 'Write CRUD functions for all 3 pages',
					completed: false
				}
			]);
		});
};
