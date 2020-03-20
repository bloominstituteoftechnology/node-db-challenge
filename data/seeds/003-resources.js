exports.seed = function(knex) {
	return knex('resources').insert([
		{
			name: 'Resource 1',
			description: 'Resource Description 1',
			project_id: 1
		},
		{
			name: 'Resource 2',
			description: 'Resource Description 2',
			project_id: 2
		},
		{ name: 'Resource 3', description: 'Resource Description 3', project_id: 3 }
	]);
};
