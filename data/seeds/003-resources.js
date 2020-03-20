exports.seed = function(knex) {
	return knex('resources').insert([
		{
			resources_name: 'Resource 1',
			resources_description: 'Resource Description 1',
			project_id: 1
		},
		{
			resources_name: 'Resource 2',
			resources_description: 'Resource Description 2',
			project_id: 2
		},
		{
			resources_name: 'Resource 3',
			resources_description: 'Resource Description 3',
			project_id: 3
		}
	]);
};
