
exports.up = function(knex, Promise) {
return knex.schema.createTable('actions',function(t){
t.increments();	
t.string('description',144)
	.unique()
	.notNullable();
t.string('notes',2000)
	.notNullable();
t.integer('project_id')
	.unsigned()
	.references('id')
	.inTable('projects');
t.boolean('completed');
})
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('actions');
};
