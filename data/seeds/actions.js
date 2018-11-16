exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('action').del().then(function() {
		// Inserts seed entries
		return knex('action').insert([
			{
				description: 'Pick out colors',
				notes: 'We all hate the color red, do not use it',
				project_id: 1
			}
		]);
	});
};
