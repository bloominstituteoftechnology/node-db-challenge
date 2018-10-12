
exports.up = function(knex, Promise) {
return knex.schema.createTable('projects',function(t){
t.increments();
t.string('name',144)
	.unique()
	.notNullable();
t.string('description',2000)
	.notNullable();
t.boolean('completed')
	.defaultTo(false);
})
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('projects');
};
