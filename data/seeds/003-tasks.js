exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			id: 1,
			task_description: 'Task 1 description',
			task_notes: 'Task 1 notes',
			task_completed: false,
			project_id: 1
		},
		{
			id: 2,
			task_description: 'Task 2 description',
			task_notes: 'Task 2 notes',
			task_completed: false,
			project_id: 3
		},
		{
			id: 3,
			task_description: 'Task 3 description',
			task_notes: 'Task 3 notes',
			task_completed: false,
			project_id: 3
		},
		{
			id: 4,
			task_description: 'Task 4 description',
			task_notes: 'Task 4 notes',
			task_completed: false,
			project_id: 2
		},
		{
			id: 5,
			task_description: 'Task 5 description',
			task_notes: 'Task 5 notes',
			task_completed: false,
			project_id: 2
		},
		{
			id: 6,
			task_description: 'Task 6 description',
			task_notes: 'Task 6 notes',
			task_completed: false,
			project_id: 1
		}
	]);
};
