exports.up = function(knex) {
	return (
		knex.schema
			//Projects table
			.createTable('projects', (table) => {
				table.increments();
				table.string('project_name').notNullable();
				table.text('project_description');
				table.boolean('project_completed').default('false');
			})
			//Resources Table

			.createTable('resources', (table) => {
				table.increments();
				table.string('resource_name').notNullable().unique();
				table.text('resource_description');
			})
			//Tasks Table
			.createTable('tasks', (table) => {
				table.increments();
				table.text('task_description').notNullable();
				table.text('task_notes');
				table.boolean('task_completed').default('false');
				table
					.integer('project_id')
					.references('id')
					.inTable('projects')
					.onDelete('CASCADE')
					.onUpdate('CASCADE')
					.notNullable();
			})
			//join table for projects and resources

			.createTable('project-resources', (table) => {
				table
					.integer('project_id')
					.notNullable()
					.references('id')
					.inTable('projects')
					.onDelete('CASCADE')
					.onUpdate('CASCADE');

				table
					.integer('resource_id')
					.notNullable()
					.references('id')
					.inTable('resources')
					.onDelete('CASCADE')
					.onUpdate('CASCADE');
				table.primary([ 'project_id', 'resource_id' ]);
			})
	);
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('project-resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
