exports.seed = function(knex, Promise) {
	return knex('contexts')
		.del() // delete all context's
		.then(function() {
			return knex('contexts').insert([
				{ id: 1, context: 'Home' }, //context id 1
				{ id: 2, context: 'Office' }, //context id 2
				{ id: 3, context: 'At Computer' }, //context id 3
				{ id: 4, context: 'Parents House' }, // context id 4
				{ id: 5, context: 'Lambda School' } // context id 5
			]);
		});
};
