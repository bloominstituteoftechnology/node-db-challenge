exports.up = function(knex) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments();

			tbl.string('name').notNullable();
			tbl.string('description').notNullable();
			tbl.boolean('completed').defaultTo(0);
		})

		.createTable('tasks', tbl => {
			tbl.increments();
			tbl.string('description').notNullable();
			tbl.string('notes');
			tbl.boolean('completed').defaultTo(0);
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		})

		.createTable('resources', tbl => {
			tbl.increments();
			tbl
				.string('name')
				.notNullable()
				.unique();
			tbl.string('description');
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects');
};
