exports.seed = function(knex) {
	return knex('projects').insert([
		{ name: 'Project 1', description: 'Description 1', completed: 0 },
		{ name: 'Project 2', description: 'Description 2', completed: 0 },
		{ name: 'Project 3', description: 'Description 3', completed: 0 }
	]);
};
