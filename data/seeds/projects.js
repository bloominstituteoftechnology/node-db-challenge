exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('projects').del().then(function() {
		// Inserts seed entries
		return knex('projects').insert([
			{
				name: 'Super Website Project',
				description: 'Make the best site ever'
			}
		]);
	});
};
