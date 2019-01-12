
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        // Sprint 1
				{
					description: 'Action 1 for Sprint 1',
					notes: 'notes',
					completed: true,
					project_id: 1,
				},
				{
					description: 'Action 2 for Sprint 1',
					notes: 'notes',
					completed: false,
					project_id: 1,
				},
				// Sprint 2
				{
					description: 'Action 1 for Sprint 2',
					notes: 'notes',
					completed: true,
					project_id: 2,
				},
				{
					description: 'Action 2 for Sprint 2',
					notes: 'notes',
					completed: true,
					project_id: 2,
				},
				// Sprint 3
				{
					description: 'Action 1 for Sprint 3',
					notes: 'notes',
					completed: false,
					project_id: 3,
				}
      ]);
    });
};
