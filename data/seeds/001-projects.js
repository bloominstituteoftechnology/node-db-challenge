exports.seed = function(knex) {
	return knex('projects').insert([
		{
			projects_name: 'Project 1',
			projects_description: 'Description 1',
			projects_completed: 0
		},
		{
			projects_name: 'Project 2',
			projects_description: 'Description 2',
			projects_completed: 0
		},
		{
			projects_name: 'Project 3',
			projects_description: 'Description 3',
			projects_completed: 0
		}
	]);
};
