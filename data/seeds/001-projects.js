exports.seed = function(knex) {
	return knex('projects').insert([
		{
			id: 1,
			project_name: 'Project 1',
			project_description: 'Project 1 description',
			project_completed: true
		},
		{
			id: 2,
			project_name: 'Project 2',
			project_description: 'Project 2 description',
			project_completed: false
		},
		{
			id: 3,
			project_name: 'Project 3',
			project_description: 'Project 3 description',
			project_completed: false
		}
	]);
};
