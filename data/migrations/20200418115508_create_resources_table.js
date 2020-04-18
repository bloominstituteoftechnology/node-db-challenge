
exports.up = function(knex) {
    return knex.schema.createTable('resources', table => {
    	// auto incrmenting id
	table.increments();

	// name
	table.text('name').notNullable();
	
	// description 
	table.text('description')
	
	// foreign key for the project_id
	table.integer('project_id').unsigned().notNullable();
	table.foreign('project_id').references('PROJECTS.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
