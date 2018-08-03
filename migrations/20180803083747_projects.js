
exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', function(t) {
        t.increments('id').primary();

      	t
      	.text('name')
      	.notNullable()
      	.defaultTo('Not Provided');

	t
	.text('description')
        .notNullable()
        .defaultTo('Not Provided');	

	t
        .boolean('completed')
	.defaultTo(false);	
  });

};


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
