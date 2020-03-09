exports.seed = function(knex) {
	return knex('resources').insert([
		{
			id: 1,
			resource_name: 'Resource 1',
			resource_description: 'Resource 1 description'
		},
		{
			id: 2,
			resource_name: 'Resource 2',
			resource_description: 'Resource 2 description'
		},
		{
			id: 3,
			resource_name: 'Resource 3',
			resource_description: 'Resource 3 description'
		}
	]);
};
