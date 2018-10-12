exports.seed = function(knex, Promise) {
	const actions = [
		{
			project_id: 1,
			description: 'action 1 description',
			notes: 'action 1 notes',
			completed: true
		},
		{
			project_id: 1,
			description: 'action 2 description',
			notes: 'action 2 notes',
			completed: true
		},
		{
			project_id: 2,
			description: 'action 3 description',
			notes: 'action 3 notes',
			completed: false
		},
		{
			project_id: 2,
			description: 'action 4 description',
			notes: 'action 4 notes',
			completed: false
		},
		{
			project_id: 3,
			description: 'action 5 description',
			notes: 'action 5 notes',
			completed: true
		},
		{
			project_id: 3,
			description: 'action 6 description',
			notes: 'action 6 notes',
			completed: false
		}
	];

	return knex('projects')
		.del()
		.then(function() {
			return knex('actions').insert(actions);
		});
};
