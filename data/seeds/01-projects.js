exports.seed = function(knex, Promise) {
	const projects = [
		{
			name: 'project 1',
			description: 'project 1 description',
			completed: true
		},
		{
			name: 'project 2',
			description: 'project 2 description',
			completed: false
		},
		{
			name: 'project 3',
			description: 'project 3 description',
			completed: false
		}
	];

	return knex('projects')
		.del()
		.then(function() {
			return knex('projects').insert(projects);
		});
};
