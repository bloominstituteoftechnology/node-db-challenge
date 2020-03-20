exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			tasks_description: 'Task 1',
			notes: 'Note 1',
			tasks_completed: 0,
			project_id: 1
		},
		{
			tasks_description: 'Task 2',
			notes: 'Note 2',
			tasks_completed: 0,
			project_id: 2
		},
		{
			tasks_description: 'Task 3',
			notes: 'Note 3',
			tasks_completed: 0,
			project_id: 3
		}
	]);
};
