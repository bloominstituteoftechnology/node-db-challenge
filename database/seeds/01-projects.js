exports.seed = function(knex, Promise) {
	return knex('projects')
		.del() // delete all projects's
		.then(function() {
			return knex('projects').insert([
				{
					id: 1,
					name: 'Clean the house',
					description:
						'Do all actions as chores in the at home context',
					completed: false
				},
				{
					id: 2,
					name: 'Update Work Computers',
					description:
						'Backup, then update the software on all work computers',
					completed: false
				},
				{
					id: 3,
					name: 'Finish Sprint',
					description:
						'Build the entire backend API of the Sprint Project',
					completed: false
				}
			]);
		});
};