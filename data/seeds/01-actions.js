
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('actions').truncate()
	.then(function () {
	    // Inserts seed entries
	    return knex('actions').insert([
		{completed: false, notes: 'dfgjhkl', project_id: 1, description: 'talk to HOA'},
		{completed: false, notes: 'kjhgfd', project_id: 2, description: 'go to the vet'},
		{completed: false, notes: 'esrtyuiuoiuytgdfcvbnh', project_id: 3, description: 'create resume'},
	        {completed: false, notes: 'w34567ikjhgfd', project_id: 3, description: 'interview'}
	    ]);
	});
};
